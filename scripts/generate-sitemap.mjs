import fs from 'node:fs';
import path from 'node:path';

const baseUrl = 'https://koja-baram.jfry4807.workers.dev';

const destinationsPath = path.resolve('src/data/destinations.ts');
const outputPath = path.resolve('public/sitemap.xml');

const source = fs.readFileSync(destinationsPath, 'utf8');

// استخراج citySlug و countrySlug از آبجکت‌های شهرها
const cityMatches = [
  ...source.matchAll(
    /slug:\s*['"]([^'"]+)['"][\s\S]*?countrySlug:\s*['"]([^'"]+)['"]/g
  ),
];

const urls = new Set();

urls.add('/');

for (const match of cityMatches) {
  const citySlug = match[1];
  const countrySlug = match[2];

  urls.add(`/${countrySlug}/${citySlug}`);
}

const today = new Date().toISOString().split('T')[0];

const xmlUrls = [...urls]
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sitemap, 'utf8');

console.log(`Sitemap generated: ${urls.size} URLs`);
