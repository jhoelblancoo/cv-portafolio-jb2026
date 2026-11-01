import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_VERSION } from '../../core/app-version';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  private readonly themeService = inject(ThemeService);

  readonly year = new Date().getFullYear();
  readonly version = APP_VERSION;

  // Mark navy/blanco según tema (mismo kit que el header)
  readonly brandMarkSrc = computed(() =>
    this.themeService.theme() === 'dark'
      ? 'assets/brand/jb-mark-white-64.png'
      : 'assets/brand/jb-mark-navy-64.png',
  );

  readonly cvLabel = $localize`:@@footer.cv:Descargar CV`;
  readonly cvEs = $localize`:@@footer.cv.es:CV ES (largo)`;
  readonly cvEn = $localize`:@@footer.cv.en:CV EN (largo)`;
  readonly about = $localize`:@@footer.about:Sobre mí`;
  readonly contact = $localize`:@@footer.contact:Contacto`;
}
