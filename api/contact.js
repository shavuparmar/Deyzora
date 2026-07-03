export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, company, email, phone, country, service, budget, timeline, message, honeypot,
      isWizard, projectType, problem 
    } = req.body;

    // Honeypot check for bots
    if (honeypot) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    if (!name || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 1. Send to Telegram (if configured)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      let text = '';
      
      if (isWizard) {
        text = `
🚀 *NEW PROJECT ONBOARDING* 🚀

*Client:* ${name} (${company || 'No Company'})
*Email:* ${email}
*Phone:* ${phone}

*Project Type:* ${projectType}
*Budget:* ${budget}
*Timeline:* ${timeline}

*Core Problem:*
${problem}
        `;
      } else {
        text = `
🌟 *New Lead from Deyzora Website* 🌟

*Name:* ${name}
*Company:* ${company || 'N/A'}
*Email:* ${email}
*Phone:* ${phone}
*Country:* ${country || 'N/A'}

*Service:* ${service || 'N/A'}
*Budget:* ${budget || 'N/A'}
*Timeline:* ${timeline || 'N/A'}

*Message:*
${message || 'N/A'}
        `;
      }

      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: text,
          parse_mode: 'Markdown'
        })
      }).catch(err => console.error('Telegram Error:', err));
    }

    // 2. Google Sheets Webhook
    const googleWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleWebhookUrl) {
       await fetch(googleWebhookUrl, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(req.body)
       }).catch(err => console.error('Google Sheets Error:', err));
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
