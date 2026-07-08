import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config();

const SITE_URL = process.env.VITE_SITE_URL || 'https://deyzorainfotech.com';

const serviceIds = [
  'website-development',
  'wordpress-development',
  'graphic-design',
  'logo-design'
];

const blogIds = [
  'future-of-web-development-2026',
  'why-business-needs-custom-website',
  'mastering-ui-ux-design',
  'optimizing-wordpress-speed',
  'psychology-of-color-logo-design',
  'react-server-components-explained'
];

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/pricing',
  '/blog',
  '/contact',
  '/lets-talk',
  '/privacy-policy',
  '/terms-conditions',
  '/refund-policy',
  '/cancellation-policy',
  '/shipping-policy',
  '/cookie-policy',
  '/disclaimer',
  '/accessibility',
  '/security-policy',
  '/dmca-policy',
  '/copyright-policy',
  '/acceptable-use-policy',
  '/sla',
  '/intellectual-property',
  '/grievance-policy',
  '/sitemap'
];

const allRoutes = [
  ...staticRoutes, 
  ...serviceIds.map(id => `/services/${id}`),
  ...blogIds.map(id => `/blog/${id}`)
];

const uniqueRoutes = [...new Set(allRoutes)];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes.map(route => `
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
