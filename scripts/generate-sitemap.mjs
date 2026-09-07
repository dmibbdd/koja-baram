import fs from 'node:fs';
import path from 'node:path';

const baseUrl = 'https://koja-baram.jfry4807.workers.dev';

const destinationsPath = path.resolve('src/data/destinations.ts');
const outputPath = path.resolve('public/sitemap.xml');

const source = fs.readFileSync(destinationsPath, 'utf8');

const urls = new Set();

// صفحه اصلی
urls.add('/');

// صفحات ثابت قابل ایندکس
[
  '/explore',
  '/guides',
  '/about',
  '/contact',
  '/privacy',
].forEach((url) => urls.add(url));

/**
 * استخراج یک object section از فایل TypeScript
 */
function getSection(startText, endText) {
  const start = source.indexOf(startText);

  if (start === -1) {
    return '';
  }

  const end = source.indexOf(endText, start);

  if (end === -1) {
    return source.slice(start);
  }

  return source.slice(start, end);
}

/**
 * استخراج رکوردهای سطح اول مثل:
 *
 * paris: {
 *   ...
 * }
 */
function getRecords(section) {
  const records = [];

  const start = section.indexOf('{');

  if (start === -1) {
    return records;
  }

  let depth = 0;
  let recordStart = null;

  for (let i = start; i < section.length; i++) {
    const char = section[i];

    if (char === '{') {
      depth++;

      // اولین { بعد از نام رکورد
      if (depth === 1) {
        const before = section.slice(0, i);
        const match = before.match(
          /(?:^|\n)\s*['"]?([A-Za-z0-9_-]+)['"]?\s*:\s*$/
        );

        if (match) {
          recordStart = i;
        }
      }
    }

    if (char === '}') {
      depth--;

      if (depth === 0 && recordStart !== null) {
        records.push(section.slice(recordStart, i + 1));
        recordStart = null;
      }
    }
  }

  return records;
}

function getField(record, field) {
  const regex = new RegExp(
    `${field}:\\s*['"]([^'"]+)['"]`
  );

  const match = record.match(regex);

  return match ? match[1] : null;
}

/* =========================
   COUNTRIES
========================= */

const countriesSection = getSection(
  'export const countries',
  'export const'
);

const countryRecords = getRecords(countriesSection);

for (const record of countryRecords) {
  const slug = getField(record, 'slug');

  if (slug) {
    urls.add(`/${slug}`);
  }
}

/* =========================
   CITIES
========================= */

const citiesSection = getSection(
  'export const cities',
  'export const countries'
);

const cityRecords = getRecords(citiesSection);

const cityMap = new Map();

for (const record of cityRecords) {
  const slug = getField(record, 'slug');
  const countrySlug = getField(record, 'countrySlug');

  if (!slug || !countrySlug) {
    continue;
  }

  cityMap.set(slug, countrySlug);

  urls.add(`/${countrySlug}/${slug}`);
}

/* =========================
   ATTRACTIONS
========================= */

const attractionsSection = getSection(
  'export const attractions',
  'export const cities'
);

const attractionRecords = getRecords(attractionsSection);

for (const record of attractionRecords) {
  const slug = getField(record, 'slug');
  const citySlug = getField(record, 'citySlug');

  if (!slug || !citySlug) {
    continue;
  }

  const countrySlug = cityMap.get(citySlug);

  if (!countrySlug) {
    continue;
  }

  urls.add(`/${countrySlug}/${citySlug}/${slug}`);
}

/* =========================
   GENERATE XML
========================= */

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
