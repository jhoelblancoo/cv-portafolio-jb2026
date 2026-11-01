import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, LOCALE_ID, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { SiteFooter } from '../site-footer/site-footer';
import { ThemeToggle } from '../../shared/theme-toggle/theme-toggle';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SiteFooter, ThemeToggle],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  private readonly locale = inject(LOCALE_ID);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeService = inject(ThemeService);

  readonly brandMarkSrc = computed(() =>
    this.themeService.theme() === 'dark'
      ? 'assets/brand/jb-mark-white-64.png'
      : 'assets/brand/jb-mark-navy-64.png',
  );

  readonly navHome = $localize`:@@nav.home:Inicio`;
  readonly navProjects = $localize`:@@nav.projects:Proyectos`;
  readonly navAbout = $localize`:@@nav.about:Sobre mí`;
  readonly navContact = $localize`:@@nav.contact:Contacto`;

  readonly esHref = this.localeHref('es');
  readonly enHref = this.localeHref('en');

  get isSpanish(): boolean {
    return this.locale.toLowerCase().startsWith('es');
  }

  /**
   * @angular/localize ships separate builds under /es/ and /en/.
   * Force a full document navigation (do not let the SPA router swallow /en).
   */
  goLocale(target: 'es' | 'en', event: Event): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.document.defaultView?.location.assign(this.localeHref(target));
  }

  private localeHref(target: 'es' | 'en'): string {
    if (!isPlatformBrowser(this.platformId)) {
      return `/${target}/`;
    }
    const path = this.pathWithoutLocalePrefix();
    return `/${target}${path}`;
  }

  private pathWithoutLocalePrefix(): string {
    const raw = this.document.defaultView?.location.pathname ?? '/';
    const stripped = raw.replace(/^\/(es|en)(?=\/|$)/, '') || '/';
    const normalized = stripped.startsWith('/') ? stripped : `/${stripped}`;
    // Keep trailing slash only for locale roots
    if (normalized === '/') {
      return '/';
    }
    return normalized.replace(/\/$/, '');
  }
}
