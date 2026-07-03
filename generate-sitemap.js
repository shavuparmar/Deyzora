import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config();

const SITE_URL = process.env.VITE_SITE_URL || 'https://deyzora.online';

// Read constants.js to get dynamic services
// We can simply read it as text and extract the IDs via regex since it's a simple JS file
const constantsPath = path.join(__dirname, 'src', 'data', 'constants.js');
const constantsContent = fs.readFileSync(constantsPath, 'utf8');

// Simple regex to extract `id: "some-service"`
const idRegex = /id:\s*["']([^"']+)["']/g;
const serviceIds = [];
let match;
while ((match = idRegex.exec(constantsContent)) !== null) {
  serviceIds.push(match[1]);
}

const staticRoutes = [
  '/',
  '/about',
  '/portfolio',
  '/pricing',
  '/contact',
  '/lets-talk',
  '/privacy-policy',
  '/terms-and-conditions',
  '/refund-policy',
  '/cancellation-policy',
  '/shipping-policy',
  '/cookie-policy',
  '/disclaimer',
  '/accessibility',
  '/security-policy',
  '/sitemap'
];

const allRoutes = [...staticRoutes, ...serviceIds.map(id => `/services/${id}`)];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.includes('/services/') ? '0.8' : '0.6'}</priority>
  </url>
`).join('')}
</urlset>`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent.trim());
console.log('✅ sitemap.xml generated successfully!');

const robotsContent = `User-agent: *
Allow: /
Disallow: /admin

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent.trim());
console.log('✅ robots.txt generated successfully!');
