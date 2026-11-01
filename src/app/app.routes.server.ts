import { RenderMode, ServerRoute } from '@angular/ssr';

const PROJECT_SLUGS = [
  'pasarela',
  'bdt-app',
  'onboarding',
  'pago-chinchin',
  'chinchin-business',
  'botly',
  'bdv-cambios',
  'intt-multas',
] as const;

export const serverRoutes: ServerRoute[] = [
  {
    path: 'proyectos/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECT_SLUGS.map((slug) => ({ slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
