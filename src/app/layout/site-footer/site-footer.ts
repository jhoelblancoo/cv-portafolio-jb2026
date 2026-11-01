import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly year = new Date().getFullYear();
  readonly cvLabel = $localize`:@@footer.cv:Descargar CV`;
  readonly cvEs = $localize`:@@footer.cv.es:CV ES (largo)`;
  readonly cvEn = $localize`:@@footer.cv.en:CV EN (largo)`;
  readonly about = $localize`:@@footer.about:Sobre mí`;
  readonly contact = $localize`:@@footer.contact:Contacto`;
}
