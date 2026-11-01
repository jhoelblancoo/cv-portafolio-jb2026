export interface ProjectLink {
  /** Stable id for tracking / i18n label lookup */
  kind: 'demo' | 'web' | 'appStore' | 'playStore' | 'live';
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  metric: string;
  technologies: string[];
  featured: boolean;
  role: string;
  links: ProjectLink[];
}

/** Copy aligned with cv/source/i18n (ES source; EN via localize). Public URLs from Jhoel. */
export const PROJECTS: Project[] = [
  {
    slug: 'pasarela',
    name: $localize`:@@project.pasarela.name:Pasarela de pago Chinchin`,
    subtitle: $localize`:@@project.pasarela.subtitle:Pasarela de pago`,
    description: $localize`:@@project.pasarela.description:Solución de pagos a la medida, utilizada por empresas líderes de delivery, transporte, ecommerce y gubernamentales venezolanas. Procesa 1M+ transacciones mensuales de forma segura, integrando los métodos de pago de Chinchin y bancos nacionales.`,
    shortDescription: $localize`:@@project.pasarela.short:Procesa 1M+ transacciones seguras mensuales para empresas líderes venezolanas.`,
    metric: $localize`:@@project.pasarela.metric:1M+ tx/mes`,
    technologies: ['Angular'],
    featured: true,
    role: $localize`:@@project.pasarela.role:Web Angular`,
    links: [
      {
        kind: 'demo',
        label: $localize`:@@link.demo:Demo`,
        url: 'https://sandbox-payments.pagochinchin.com/chinchindemopasarelanobanktipsdiscount',
      },
    ],
  },
  {
    slug: 'bdt-app',
    name: $localize`:@@project.bdt.name:BDT App`,
    subtitle: $localize`:@@project.bdt.subtitle:Banco Digital de los Trabajadores`,
    description: $localize`:@@project.bdt.description:App oficial del banco #2 más grande de Venezuela, con más de 3 millones de usuarios. Replica todas las funcionalidades del portal web.`,
    shortDescription: $localize`:@@project.bdt.short:App móvil oficial del banco público #2 de Venezuela, con 3M+ usuarios.`,
    metric: $localize`:@@project.bdt.metric:3M+ usuarios`,
    technologies: ['Flutter'],
    featured: true,
    role: $localize`:@@project.bdt.role:App Flutter · PM con banco`,
    links: [
      {
        kind: 'appStore',
        label: $localize`:@@link.appStore:App Store`,
        url: 'https://apps.apple.com/ve/app/movil-bdt/id6748326386',
      },
      {
        kind: 'playStore',
        label: $localize`:@@link.playStore:Google Play`,
        url: 'https://play.google.com/store/apps/details?id=com.bcodigital.bcoapp&hl=es_VE',
      },
    ],
  },
  {
    slug: 'onboarding',
    name: $localize`:@@project.onboarding.name:Onboarding digital Chinchin`,
    subtitle: $localize`:@@project.onboarding.subtitle:Producto Fintech`,
    description: $localize`:@@project.onboarding.description:Plataforma web de verificación de identidad altamente personalizable y 100% remota para personas y empresas. Elimina la necesidad de trámites presenciales (ej.: apertura de cuentas o registros de usuarios) en bancos, aseguradoras u otras instituciones.`,
    shortDescription: $localize`:@@project.onboarding.short:Plataforma de verificación de identidad 100% remota. Elimina trámites presenciales en bancos, aseguradoras, etc.`,
    metric: $localize`:@@project.onboarding.metric:KYC remoto 100%`,
    technologies: ['Angular'],
    featured: true,
    role: $localize`:@@project.onboarding.role:Web Angular`,
    links: [
      {
        kind: 'live',
        label: $localize`:@@link.live:Registro en vivo`,
        url: 'https://ondboarding.pagochinchin.com/?templatev2=01146ac605f76c99.8a815a721cdfd5d6b4fecd0f41c19df1c35bfd1f1757c9e88d98f1daf408c36dccc5c9296911fba5f4c30cb6c420728c6d98eab0c3704fac533ae78ab0165e35',
      },
    ],
  },
  {
    slug: 'pago-chinchin',
    name: $localize`:@@project.pago.name:PagoChinchin`,
    subtitle: $localize`:@@project.pago.subtitle:Webs y App para Fintech`,
    description: $localize`:@@project.pago.description:Ecosistema financiero completo de la fintech #1 en Venezuela, incluye aplicación web, móvil y sistema administrativo para gestionar pagos, transacciones bancarias, cuentas multimonedas y servicios básicos.`,
    shortDescription: $localize`:@@project.pago.short:Ecosistema financiero completo de la fintech venezolana #1. Webs, app y sistema administrativo.`,
    metric: $localize`:@@project.pago.metric:Fintech #1 VE`,
    technologies: ['Angular'],
    featured: false,
    role: $localize`:@@project.pago.role:Ecosistema B2C web + app`,
    links: [
      {
        kind: 'web',
        label: $localize`:@@link.web:Sitio web`,
        url: 'https://www.pagochinchin.com/',
      },
      {
        kind: 'appStore',
        label: $localize`:@@link.appStore:App Store`,
        url: 'https://apps.apple.com/ve/app/pago-chinchin/id1529810682',
      },
      {
        kind: 'playStore',
        label: $localize`:@@link.playStore:Google Play`,
        url: 'https://play.google.com/store/apps/details?id=com.pagochinchin.app&hl=es_VE',
      },
    ],
  },
  {
    slug: 'chinchin-business',
    name: $localize`:@@project.business.name:Chinchin Business`,
    subtitle: $localize`:@@project.business.subtitle:Ecosistema B2B`,
    description: $localize`:@@project.business.description:Plataforma B2B de Chinchin para empresas: pagos, operaciones y servicios del ecosistema fintech #1 de Venezuela.`,
    shortDescription: $localize`:@@project.business.short:Portal B2B de Chinchin para empresas del ecosistema fintech.`,
    metric: $localize`:@@project.business.metric:B2B`,
    technologies: ['Angular'],
    featured: false,
    role: $localize`:@@project.business.role:Web B2B`,
    links: [
      {
        kind: 'web',
        label: $localize`:@@link.web:Sitio web`,
        url: 'https://business.pagochinchin.com/',
      },
    ],
  },
  {
    slug: 'botly',
    name: $localize`:@@project.botly.name:Botly`,
    subtitle: $localize`:@@project.botly.subtitle:Tesis universitaria`,
    description: $localize`:@@project.botly.description:Sistema para la adquisición, personalización y administración de bots de Telegram, dirigido a personas que no cuentan con experticia en programación.`,
    shortDescription: $localize`:@@project.botly.short:Sistema para adquisición y administración de bots de Telegram sin saber programar.`,
    metric: $localize`:@@project.botly.metric:Telegram bots`,
    technologies: ['Angular', 'Node.js', 'PostgreSQL'],
    featured: false,
    role: $localize`:@@project.botly.role:Web + backend + diseño`,
    links: [
      {
        kind: 'live',
        label: $localize`:@@link.liveSite:Sitio en vivo`,
        url: 'https://botly.netlify.app/',
      },
    ],
  },
  {
    slug: 'bdv-cambios',
    name: $localize`:@@project.bdv.name:BDV Cambios`,
    subtitle: $localize`:@@project.bdv.subtitle:Página web bancaria`,
    description: $localize`:@@project.bdv.description:Sistema de cambio de divisas del Banco de Venezuela (#1 del país con 15M+ clientes). Permite operaciones con monedas nacionales e internacionales, integrada directamente con su core bancario.`,
    shortDescription: $localize`:@@project.bdv.short:Cambio de divisas del Banco de Venezuela (#1 del país, 15M+ clientes), integrado al core bancario.`,
    metric: $localize`:@@project.bdv.metric:BDV 15M+ clientes`,
    technologies: ['Angular'],
    featured: false,
    role: $localize`:@@project.bdv.role:Web Angular`,
    links: [],
  },
  {
    slug: 'intt-multas',
    name: $localize`:@@project.intt.name:INTT Multas`,
    subtitle: $localize`:@@project.intt.subtitle:App de Instituto Nacional de Transporte Terrestre (INTT)`,
    description: $localize`:@@project.intt.description:App Flutter (despliegue privado por APK) para digitalizar multas de tránsito del INTT: gestión, apelaciones, notificaciones y pagos con Pasarela Chinchin. Desarrollo frontend y enlace con el cliente.`,
    shortDescription: $localize`:@@project.intt.short:App Flutter (APK privada) para multas INTT: gestión, apelaciones y pagos Chinchin. Desarrollo frontend y enlace con el cliente.`,
    metric: $localize`:@@project.intt.metric:APK privada`,
    technologies: ['Flutter', 'Node.js', 'PostgreSQL'],
    featured: false,
    role: $localize`:@@project.intt.role:FE Flutter · enlace con cliente`,
    links: [],
  },
];

export const FEATURED_PROJECTS: Project[] = PROJECTS.filter((p) => p.featured);

export const MORE_PROJECTS: Project[] = PROJECTS.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
