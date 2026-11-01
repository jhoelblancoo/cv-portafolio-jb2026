import { DOCUMENT } from '@angular/common';
import { Injectable, inject, LOCALE_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { getProjectBySlug } from '../../data/projects';

const SITE = 'https://jhoelblanco.netlify.app';
const OG_IMAGE_PATH = 'assets/photos/hero-graduation.jpg';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly localeId = inject(LOCALE_ID);

  private readonly siteName = 'Jhoel Blanco';
  private readonly defaultTitle = $localize`:@@seo.home.title:Jhoel Blanco — Frontend Engineer`;
  private readonly defaultDescription = $localize`:@@seo.home.description:Portafolio de Jhoel Blanco — Frontend Engineer (Angular & Flutter). Productos de pagos, banca y operaciones críticas.`;
  private readonly aboutTitle = $localize`:@@seo.about.title:Sobre mí — Jhoel Blanco`;
  private readonly aboutDescription = $localize`:@@seo.about.description:Sobre Jhoel Blanco: Frontend Engineer con experiencia en Angular, Flutter y productos fintech en Venezuela.`;
  private readonly contactTitle = $localize`:@@seo.contact.title:Contacto — Jhoel Blanco`;
  private readonly contactDescription = $localize`:@@seo.contact.description:Contacta a Jhoel Blanco por email, WhatsApp, LinkedIn o GitHub.`;
  private readonly projectTitleSuffix = $localize`:@@seo.project.titleSuffix:— Jhoel Blanco`;

  init(): void {
    this.applyForUrl(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.applyForUrl(event.urlAfterRedirects));
  }

  private get locale(): 'es' | 'en' {
    return this.localeId.toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  private applyForUrl(rawUrl: string): void {
    const path = this.normalizePath(rawUrl);
    const { title, description } = this.copyForPath(path);
    const canonical = this.absoluteUrl(this.locale, path);
    const alternateEs = this.absoluteUrl('es', path);
    const alternateEn = this.absoluteUrl('en', path);
    const ogImage = `${SITE}/${this.locale}/${OG_IMAGE_PATH}`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:locale', content: this.locale === 'en' ? 'en_US' : 'es_VE' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    this.setLink('canonical', canonical);
    this.setHreflang('es', alternateEs);
    this.setHreflang('en', alternateEn);
    this.setHreflang('x-default', alternateEs);
  }

  private copyForPath(path: string): { title: string; description: string } {
    if (path === '/sobre-mi') {
      return { title: this.aboutTitle, description: this.aboutDescription };
    }
    if (path === '/contacto') {
      return { title: this.contactTitle, description: this.contactDescription };
    }
    const projectMatch = path.match(/^\/proyectos\/([^/]+)$/);
    if (projectMatch) {
      const project = getProjectBySlug(projectMatch[1]);
      if (project) {
        return {
          title: `${project.name} ${this.projectTitleSuffix}`,
          description: project.shortDescription || project.description,
        };
      }
    }
    return { title: this.defaultTitle, description: this.defaultDescription };
  }

  private normalizePath(rawUrl: string): string {
    const withoutQuery = rawUrl.split('?')[0]?.split('#')[0] ?? '/';
    const stripped = withoutQuery.replace(/^\/(es|en)(?=\/|$)/, '') || '/';
    if (stripped === '/' || stripped === '') {
      return '/';
    }
    return stripped.endsWith('/') ? stripped.slice(0, -1) : stripped;
  }

  private absoluteUrl(locale: 'es' | 'en', path: string): string {
    if (path === '/') {
      return `${SITE}/${locale}/`;
    }
    return `${SITE}/${locale}${path}`;
  }

  private setLink(rel: string, href: string): void {
    let el = this.document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!el) {
      el = this.document.createElement('link');
      el.setAttribute('rel', rel);
      this.document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  private setHreflang(hreflang: string, href: string): void {
    let el = this.document.head.querySelector(
      `link[rel="alternate"][hreflang="${hreflang}"]`,
    ) as HTMLLinkElement | null;
    if (!el) {
      el = this.document.createElement('link');
      el.setAttribute('rel', 'alternate');
      el.setAttribute('hreflang', hreflang);
      this.document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
