#!/usr/bin/env node
/**
 * Copy SEO files to the Netlify publish root (beside /es and /en).
 * Angular localize puts `public/` assets under each locale only.
 */
import { mkdirSync, writeFileSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publish = join(root, 'dist/portfolio/browser');
const site = 'https://jhoelblanco.netlify.app';

const PROJECT_SLUGS = [
  'pasarela',
  'bdt-app',
  'onboarding',
  'pago-chinchin',
  'chinchin-business',
  'botly',
  'bdv-cambios',
  'intt-multas',
];

const PATHS = ['/', '/sobre-mi', '/contacto', ...PROJECT_SLUGS.map((s) => `/proyectos/${s}`)];

if (!existsSync(publish)) {
  console.error(`Missing publish dir: ${publish}. Run ng build first.`);
  process.exit(1);
}

mkdirSync(publish, { recursive: true });

copyFileSync(join(root, 'seo/robots.txt'), join(publish, 'robots.txt'));

const gscFile = 'google3804d3f31e87917d.html';
const gscSrc = join(root, 'seo', gscFile);
if (existsSync(gscSrc)) {
  copyFileSync(gscSrc, join(publish, gscFile));
} else {
  console.warn(`Missing ${gscFile} in seo/; Search Console verification will 404 at site root.`);
}

// Locale builds bury public/ under /es and /en; also expose root icons + OG image.
for (const icon of ['favicon.ico', 'apple-touch-icon.png']) {
  const fromLocale = join(publish, 'es', icon);
  if (existsSync(fromLocale)) {
    copyFileSync(fromLocale, join(publish, icon));
  }
}

const ogShare = join(root, 'seo/og-share.jpg');
if (existsSync(ogShare)) {
  copyFileSync(ogShare, join(publish, 'og-share.jpg'));
}

const urls = [];
for (const locale of ['es', 'en']) {
  for (const path of PATHS) {
    const loc = path === '/' ? `${site}/${locale}/` : `${site}/${locale}${path}`;
    urls.push(`  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

writeFileSync(join(publish, 'sitemap.xml'), sitemap, 'utf8');
console.log(
  `SEO root written: robots.txt + sitemap.xml (${urls.length} URLs)` +
    (existsSync(gscSrc) ? ` + ${gscFile}` : '') +
    ` → ${publish}`,
);
