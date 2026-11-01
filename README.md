# Portafolio — Jhoel Blanco

App Angular standalone (CLI) con i18n ES/EN (`@angular/localize`), prerender estático y tema light/dark (acento `#003049`). Slice 1: home, 3 proyectos destacados, sobre mí, contacto (solo links) y placeholders de CV.

## Destino local / GitHub

- **GitHub (solo portafolio):** https://github.com/jhoelblancoo/cv-portafolio-jb2026 — raíz = esta app Angular (sin el pipeline `cv/`).
- **Monorepo Cursor/Origin:** sigue teniendo `cv/` + `portfolio/` juntos (PDFs, mentor, etc.).
- **Carpeta Windows prevista:** `C:\Users\jblanco\Documents\Info\CV`

```powershell
git clone https://github.com/jhoelblancoo/cv-portafolio-jb2026.git "C:\Users\jblanco\Documents\Info\CV"
cd "C:\Users\jblanco\Documents\Info\CV"
npm install
npm start
```

PDFs del CV (cuando existan): copiar `Jhoel_Blanco_CV_ES_L.pdf` / `EN_L` desde el monorepo `cv/dist/` hacia `public/assets/cv/` de este repo.

## Requisitos

- Node.js 22+
- npm 10+

## Desarrollo local

```bash
cd portfolio
npm install
npm start
# = npm run build + sirve dist ES+EN en el puerto 4317
```

- **`npm start`**: build de producción + servidor estático en **http://localhost:4317/** (redirige a `/es/`). Así el switch **ES/EN** del header funciona (`/es/` ↔ `/en/`).
- **`npm run start:dev`**: `ng serve` solo en un locale (HMR). El botón EN **no** cambia idioma aquí: Angular localize es compile-time y `ng serve` no publica ambos builds a la vez.
- Puerto: **4317**.

## Build / prerender

```bash
cd portfolio
npm run build
```

Salida estática (SSG): `dist/portfolio/browser/{es,en}/` — apta para Netlify (`netlify.toml` en esta carpeta). Sitio objetivo: `jhoelblanco.netlify.app`.

Extraer / actualizar strings i18n:

```bash
npm run i18n:extract
# editar src/locale/messages.en.xlf
```

## Scripts

| Script | Uso |
|--------|-----|
| `npm start` | build + static ES+EN en puerto **4317** (idioma OK) |
| `npm run start:dev` | `ng serve` HMR (un solo locale) |
| `npm run start:en` | `ng serve` solo EN |
| `npm run build` | build producción ES+EN + prerender |
| `npm run i18n:extract` | genera `src/locale/messages.xlf` |

## Estructura (Slice 1)

- `src/app/pages/home` — hero + featured (Pasarela, BDT App, Onboarding)
- `src/app/pages/about` — posicionamiento + educación
- `src/app/pages/contact` — email, WhatsApp, LinkedIn
- `src/app/pages/project-detail` — caso por slug
- `public/assets/cv/` — placeholders PDF (ver README ahí)

## Gaps conocidos (no bloquean scaffold)

- Foto personal
- Capturas/logos por proyecto
- URL pública de GitHub
- PDFs reales desde `cv/dist/`
