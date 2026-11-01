# Portafolio — Jhoel Blanco

> **Agent / Cursor handoff:** see [`.cursor/HANDOFF.md`](.cursor/HANDOFF.md) (rules: [`.cursor/rules/portfolio-handoff.mdc`](.cursor/rules/portfolio-handoff.mdc)).

App Angular standalone (CLI) con i18n ES/EN (`@angular/localize`), prerender estático y tema light/dark (acento `#003049`). Live: https://jhoelblanco.netlify.app/es/

## Destino local / GitHub

- **GitHub (solo portafolio):** https://github.com/jhoelblancoo/cv-portafolio-jb2026 — raíz = esta app Angular (sin el pipeline `cv/`).
- **Monorepo Cursor/Origin:** sigue teniendo `cv/` + `portfolio/` juntos (PDFs, mentor, etc.).
- **Carpeta Windows:** `C:\Users\jblanco\Documents\Info\CV` — `git pull` aquí antes de trabajar.

```powershell
git clone https://github.com/jhoelblancoo/cv-portafolio-jb2026.git "C:\Users\jblanco\Documents\Info\CV"
cd "C:\Users\jblanco\Documents\Info\CV"
git pull
npm install
npm start
```

## Requisitos

- Node.js 22+
- npm 10+

## Desarrollo local

```bash
npm install
npm start
# = npm run build + sirve dist ES+EN en el puerto 4317
```

- **`npm start`**: build de producción + servidor estático en **http://localhost:4317/** (redirige a `/es/`). Así el switch **ES/EN** del header funciona (`/es/` ↔ `/en/`).
- **`npm run start:dev`**: `ng serve` solo en un locale (HMR). El botón EN **no** cambia idioma aquí: Angular localize es compile-time y `ng serve` no publica ambos builds a la vez.
- Puerto: **4317**.

## Build / prerender

```bash
npm run build
```

Salida estática (SSG): `dist/portfolio/browser/{es,en}/` — apta para Netlify (`netlify.toml`). Sitio: `jhoelblanco.netlify.app`.

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
| `npm run build` | build producción ES+EN + prerender + SEO root files |
| `npm run i18n:extract` | genera `src/locale/messages.xlf` |

## Estructura

- `src/app/pages/home` — hero + featured
- `src/app/pages/about` — posicionamiento + fotos
- `src/app/pages/contact` — email, WhatsApp, LinkedIn, GitHub
- `src/app/pages/project-detail` — caso por slug (+ galería si hay capturas)
- `public/assets/cv/` — PDFs CV ES/EN
- `public/assets/brand/` — monograma JB
- `.cursor/HANDOFF.md` — guía operativa para agentes

## Gaps conocidos

- Capturas/logos del resto de proyectos (Pasarela ya tiene)
- Reabrir indexación Google **solo** cuando Jhoel lo pida (hoy: noindex + Disallow)
- Dominio propio (opcional, después)
