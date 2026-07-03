import { MongoClient } from 'mongodb';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().optional(),
  problem: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  honeypot: z.string().optional(),
});

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db('deyzora_crm');
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // ---- GET LEADS (Admin Dashboard) ----
    if (req.method === 'GET') {
      const authHeader = req.headers.authorization;
      if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      if (!process.env.MONGODB_URI) return res.status(500).json({ error: 'DB not configured' });
      
      const { db } = await connectToDatabase(process.env.MONGODB_URI);
      const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();
      return res.status(200).json({ leads });
    }

    // ---- POST LEAD (Form Submission) ----
    if (req.method === 'POST') {
      const data = req.body;

      if (data.honeypot) return res.status(400).json({ error: 'Spam detected' });

      // Validate
      const parsedData = schema.parse(data);
      const leadDocument = {
        ...parsedData,
        status: 'new',
        createdAt: new Date(),
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        userAgent: req.headers['user-agent']
      };

      // 1. MongoDB
      if (process.env.MONGODB_URI) {
        try {
          const { db } = await connectToDatabase(process.env.MONGODB_URI);
          await db.collection('leads').insertOne(leadDocument);
        } catch (dbErr) {
          console.error("MongoDB Error", dbErr);
        }
      }

      // 2. Telegram
      if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
        const text = `
🚀 *NEW LEAD IN CRM* 🚀
*Name:* ${data.name}
*Email:* ${data.email}
*Project:* ${data.projectType || 'N/A'}
*Budget:* ${data.budget || 'N/A'}
        `;
        fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' })
        }).catch(err => console.error("Telegram Error", err));
      }

      // 3. Google Sheets (Optional, requires service account JSON stringified in env)
      if (process.env.GOOGLE_SERVICE_ACCOUNT) {
        try {
          const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
          const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
          });
          const sheets = google.sheets({ version: 'v4', auth });
          await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Leads!A:I',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[
                new Date().toISOString(), data.name, data.company || '', data.email, data.phone || '',
                data.projectType || '', data.budget || '', data.timeline || '', data.problem || ''
              ]]
            }
          });
        } catch (sheetErr) {
          console.error("Sheets Error", sheetErr);
        }
      }

      // 4. Send Email via Nodemailer
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });
          await transporter.sendMail({
            from: `"Deyzora Infotech" <${process.env.SMTP_USER}>`,
            to: data.email,
            subject: 'We received your project request!',
            html: `
              <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px;">
                <h2>Thank you for reaching out, ${data.name}!</h2>
                <p>Our senior architecture team has received your project details regarding <strong>${data.projectType || 'your inquiry'}</strong>.</p>
                <p>We typically review requests within 24 hours and will reach out to schedule a discovery call.</p>
                <br/>
                <p>Best regards,<br/>The Deyzora Team</p>
              </div>
            `
          });
        } catch (emailErr) {
          console.error("Email Error", emailErr);
        }
      }

      return res.status(200).json({ success: true, message: 'Lead captured successfully' });
    }

  } catch (error) {
    console.error('Lead API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
