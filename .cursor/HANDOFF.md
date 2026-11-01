# Portafolio Jhoel Blanco — handoff para agente Cursor (local)

**Site live:** https://jhoelblanco.netlify.app/es/  
**Repo GitHub (fuente de verdad del portafolio):** https://github.com/jhoelblancoo/cv-portafolio-jb2026  
**Clone local de Jhoel:** `C:\Users\jblanco\Documents\Info\CV`  
**Actualizado:** 2026-11-01 (America/Caracas)

Este documento es la guía operativa para agentes que trabajen en el clone local. No reinventar stack ni flujo.

> Reglas cortas siempre-on: [`.cursor/rules/portfolio-handoff.mdc`](./rules/portfolio-handoff.mdc)

---

## 1. Qué es este proyecto

App **Angular standalone** (CLI) con:

- i18n ES/EN (`@angular/localize`) → rutas `/es/` y `/en/`
- Prerender/SSG estático
- Temas light/dark, acento `#003049`
- Hosting: **Netlify** (cuenta de Jhoel), site name `jhoelblanco`
- Tono web: **Frontend Engineer** (no forzar Tech Lead)

El pipeline de CV (YAML → Typst → PDF) vive en el monorepo **Origin/Cursor** (`cv/` + `portfolio/`). Este repo **GitHub es solo la app Angular** (raíz = site). No meter `cv/` en GitHub.

---

## 2. Flujo de trabajo (importante)

```text
Cursor local (carpeta CV)
    → git commit / push a GitHub (origin)
        → Netlify auto-deploy desde main
            → https://jhoelblanco.netlify.app
```

| Pieza | Rol |
|--------|-----|
| `C:\Users\jblanco\Documents\Info\CV` | Working copy; abrir esta carpeta en Cursor |
| GitHub `jhoelblancoo/cv-portafolio-jb2026` | Remote `origin`; única fuente para Netlify |
| Netlify (cuenta Jhoel) | Build + CDN; **base directory vacío** (repo = app) |
| Origin Cursor (`cv-portafolio-jb2026`) | Histórico monorepo CV+portafolio; **no** es el día a día del portafolio |

**No** desplegar desde una cuenta Netlify del agente. **No** mezclar pushes a Origin como si fueran el site live.

### Comandos locales

```bat
cd C:\Users\jblanco\Documents\Info\CV
npm install
npm start
```

- `npm start` = build + sirve ES+EN (idioma OK) — puerto típico **4317**
- `npm run start:dev` = `ng serve` HMR, **un solo locale** (el switch EN no cambia idioma)
- `npm run build` → `dist/portfolio/browser/{es,en}/` (+ `scripts/seo-root.mjs`: robots, sitemap, GSC file, og-share, icons)
- Publish Netlify: `dist/portfolio/browser` (ver `netlify.toml`)

Branch de producción: **`main`**.

---

## 3. Netlify

- Site: `jhoelblanco.netlify.app`
- Conectado a GitHub `jhoelblancoo/cv-portafolio-jb2026`
- Base directory: **vacío** (no `portfolio/`)
- Build: `npm run build` (ver `netlify.toml`)
- Dominio propio: **diferido** (sin presupuesto); si compra luego → registrador externo → DNS a Netlify

---

## 4. SEO / indexación (estado actual)

| Recurso | URL / valor |
|---------|-------------|
| robots.txt | https://jhoelblanco.netlify.app/robots.txt |
| sitemap.xml | https://jhoelblanco.netlify.app/sitemap.xml |
| OG image | https://jhoelblanco.netlify.app/og-share.jpg (1200×630) |
| GSC verify | `/google3804d3f31e87917d.html` — **no borrar** |

**Google bloqueado a propósito** hasta que Jhoel diga “listo”:

- `robots.txt`: Disallow `/` para Google/`*`; Allow Facebook/WhatsApp/LinkedIn/Twitter bots; Allow GSC file + `/og-share.jpg`
- Meta `robots` / `googlebot`: `noindex, nofollow`
- Open Graph **sí** activo (previews WhatsApp/LinkedIn)

Cuando reabrir Google: Allow en robots, quitar noindex, opcional Scrape Again + sitemap en Search Console.

`/es/` **no** perjudica SEO (locale + hreflang/canonical).

---

## 5. Marca / logos

- Color: `#003049`
- Logo: monograma **JB** con cutouts tipo brackets (PNG original de Jhoel, fondo transparente)
- En el repo: `public/assets/brand/`
  - Nav: `jb-mark-navy-*.png` (light) / `jb-mark-white-*.png` (dark)
  - Favicon: `favicon.ico` + scheme PNGs; source: `jb-source.png`
- **No** regenerar wordmarks/variantes IA; si cambia el logo, partir del PNG original transparente de Jhoel

Tipografía live:

- Display (títulos): **Fraunces**
- Body: **Sora**, fallback `"Helvetica Neue", Helvetica, …`

---

## 6. Contenido y rutas

```text
/es | /en
  Home (hero + featured)
  Proyectos / proyectos/:slug
  Sobre mí
  Contacto (solo links)
```

**Contacto**

- Email: jhoel10blanco@gmail.com
- WhatsApp: https://wa.me/584126168206
- LinkedIn: https://www.linkedin.com/in/jhoelblanco
- GitHub: https://github.com/jhoelblancoo

**CV PDF (descarga)**

- `public/assets/cv/Jhoel_Blanco_CV_ES_L.pdf`
- `public/assets/cv/Jhoel_Blanco_CV_EN_L.pdf`  
  (confirmados OK; no regenerar salvo que Jhoel pida)

**Fotos personales**

- `public/assets/photos/` (hero graduación + gallery About)

**Capturas proyectos**

- Pasarela: `public/assets/projects/pasarela/` (4 webp) — **listo**
- Faltan: BDT, Onboarding, PagoChinchin, Business, Botly (± BDV, INTT)

**Links públicos (ya cableados)**

| Proyecto | Links |
|----------|--------|
| Pasarela | sandbox demo |
| BDT | App Store + Play |
| Onboarding | `ondboarding.pagochinchin.com…` (tal cual) |
| PagoChinchin | web + stores |
| Chinchin Business | business.pagochinchin.com |
| Botly | https://botly.netlify.app/ |

Métricas: usar las del CV (1M+ tx, 3M+ users BDT, 15M+ BDV, etc.). No inventar %.

---

## 7. Pendiente (prioridad)

1. **Capturas/logos** resto de proyectos (Jhoel adjunta → integrar galerías)
2. **Reabrir indexación Google** cuando diga que el portafolio está listo
3. Dominio propio (opcional, después)
4. Polish UI/mobile si pide

Cerrado / no tocar sin pedirlo: logo (OK), PDFs CV (OK), Search Console verify file, noindex hasta aviso, OG share image.

---

## 8. Preferencias de producto

- Tono: Frontend Engineer
- OK nombrar clientes/logos (Chinchin, bancos, INTT, …)
- Métricas importantes y creíbles
- Light + dark
- Contacto solo links (sin form, salvo que pida Netlify Forms)
- Busca trabajo remoto/presencial fuera de VE con relocation (copy About)

---

## 9. Checklist para el agente local

1. Abrir `C:\Users\jblanco\Documents\Info\CV` (no el home de Windows; nunca `git init` en `C:\Users\jblanco`)
2. Branch `main`, remote = GitHub
3. `git pull` antes de trabajar
4. Cambios pequeños y enfocados; conventional commits (`feat:`, `fix:`, …)
5. Probar con `npm start` si toca i18n/rutas
6. Push → verificar Netlify deploy
7. No reabrir Google indexación sin confirmación explícita de Jhoel
8. No borrar `google3804d3f31e87917d.html` ni romper OG (`og-share.jpg`)

---

## 10. Credenciales

- No guardar PATs en el repo ni en docs
- GitHub auth: credential manager / `gh auth` en la PC de Jhoel
- Netlify: ya linkeado a su cuenta
