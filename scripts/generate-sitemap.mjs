import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://koja-baram.jfry4807.workers.dev';

const outputDir = path.resolve('public');
const outputFile = path.join(outputDir, 'sitemap.xml');

const urls = [
  BASE_URL,
  `${BASE_URL}/france/paris`,
  `${BASE_URL}/japan/tokyo`,
  `${BASE_URL}/turkey/istanbul`,
  `${BASE_URL}/uk/london`,
  `${BASE_URL}/uae/dubai`,
  `${BASE_URL}/usa/new-york`,
  `${BASE_URL}/italy/rome`,
  `${BASE_URL}/spain/barcelona`,
  `${BASE_URL}/iran/tehran`,
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, sitemap, 'utf8');

console.log(`Sitemap generated successfully: ${urls.length} URLs`);
console.log(`Output: ${outputFile}`);
