# Portafolio — Jhoel Blanco

App Angular standalone (CLI) con i18n ES/EN (`@angular/localize`), prerender estático y tema light/dark (acento `#003049`).

**Live:** https://jhoelblanco.netlify.app/es/

## Requisitos

- Node.js 22+
- npm 10+

## Desarrollo local

```bash
git clone https://github.com/jhoelblancoo/cv-portafolio-jb2026.git
cd cv-portafolio-jb2026
npm install
npm start
# = npm run build + sirve dist ES+EN en el puerto 4317
```

- **`npm start`**: build de producción **una vez** (`prestart`) + servidor estático en **http://localhost:4317/** (redirige a `/es/`). El switch **ES/EN** funciona (`/es/` ↔ `/en/`). Si el server ya está corriendo, **no** ve cambios nuevos: hay que pararlo y volver a `npm start`.
- **`npm run start:dev`**: `ng serve` con HMR (sí refresca al editar), **un solo locale**. El botón EN **no** cambia idioma aquí: localize es compile-time.
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
| `npm start` | build + static ES+EN en puerto **4317** (idioma OK; reiniciar para ver cambios) |
| `npm run start:dev` | `ng serve` HMR (un solo locale) |
| `npm run start:en` | `ng serve` solo EN |
| `npm run build` | build producción ES+EN + prerender + SEO root files |
| `npm run i18n:extract` | genera `src/locale/messages.xlf` |

## Estructura

- `src/app/pages/*` — home, about, contact, project-detail
- `src/app/data/projects.ts` — copy, covers, galleries, links
- `src/app/core/` — tema + `app-version.ts` (versión del footer = `package.json`)
- `public/assets/cv/` — PDFs CV ES/EN
- `public/assets/brand/` — monograma JB
- `change.log.md` — historial de versiones

## Gaps conocidos

- Capturas/logos del resto de proyectos (Pasarela ya tiene)
- Reabrir indexación Google **solo** cuando Jhoel lo pida (hoy: noindex + Disallow)
- Dominio propio (opcional, después)

Lista corta de pendientes: [`falta.md`](falta.md).

## Para agentes Cursor

Guía operativa: [`.cursor/HANDOFF.md`](.cursor/HANDOFF.md) · reglas: [`portfolio-handoff.mdc`](.cursor/rules/portfolio-handoff.mdc) · mapa de capas: [`portfolio-architecture.mdc`](.cursor/rules/portfolio-architecture.mdc).
