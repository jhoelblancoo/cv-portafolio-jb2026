#!/usr/bin/env node
/**
 * Serves the multi-locale static build so /es/ and /en/ language switching works.
 * Usage: node scripts/serve-static.mjs [port]
 */
import express from 'express';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..', 'dist', 'portfolio', 'browser');
const port = Number(process.env.PORT || process.argv[2] || 4317);

if (!existsSync(join(root, 'es', 'index.html')) || !existsSync(join(root, 'en', 'index.html'))) {
  console.error(
    'Missing dist/portfolio/browser/{es,en}. Run `npm run build` first (or use `npm start`).',
  );
  process.exit(1);
}

const app = express();
app.set('strict routing', true);

app.get('/', (_req, res) => {
  res.redirect(302, '/es/');
});

for (const locale of ['es', 'en']) {
  const localeRoot = join(root, locale);

  // Only the slash-less form — strict routing avoids /es/ ↔ /es loops
  app.get(`/${locale}`, (_req, res) => {
    res.redirect(301, `/${locale}/`);
  });

  app.use(
    `/${locale}`,
    express.static(localeRoot, {
      index: 'index.html',
      redirect: false,
      fallthrough: true,
    }),
  );

  app.use(`/${locale}`, (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }
    res.sendFile(join(localeRoot, 'index.html'), (err) => (err ? next(err) : undefined));
  });
}

app.listen(port, () => {
  console.log(`Portfolio static (ES+EN) at http://localhost:${port}/ → /es/`);
  console.log(`  ES: http://localhost:${port}/es/`);
  console.log(`  EN: http://localhost:${port}/en/`);
});
