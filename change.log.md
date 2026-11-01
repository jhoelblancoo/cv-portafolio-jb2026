# portfolio — changelog

## [0.0.4] - 2026-11-01 - Jblanco

### CHANGE

- Hero: `object-position` bajado (42% desktop / 38% mobile) para mostrar cara + título en `hero-graduation.jpg`

## [0.0.3] - 2026-11-01 - Jblanco

### CHANGE

- Handoff: el agente **no** hace commit/push (lo hace Jhoel); documentado reinicio de `npm start` vs `start:dev` (HMR)

## [0.0.2] - 2026-11-01 - Jblanco

### ADD

- Logo JB en footer (tema light/dark) + span `v0.0.2` para verificar deploy
- Constante `src/app/core/app-version.ts` (espejo de `package.json` en UI)

## [0.0.1] - 2026-11-01 - Jblanco

### ADD

- Versionado semver en `package.json` + este changelog
- Regla de arquitectura `.cursor/rules/portfolio-architecture.mdc` (capas pages/layout/data/core/shared)
- Ajuste handoff: en este repo personal se permite versión + changelog + commit/push a `main` (Netlify)

### CHANGE

- `.cursor/HANDOFF.md` y `portfolio-handoff.mdc` alineados a skills (arquitectura, comentarios, versionado)
