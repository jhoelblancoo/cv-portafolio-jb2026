import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURED_PROJECTS, MORE_PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly projects = FEATURED_PROJECTS;
  readonly moreProjects = MORE_PROJECTS;

  readonly headline = $localize`:@@home.headline:Frontend Engineer`;
  readonly problem = $localize`:@@home.problem:Construyo y coordino productos frontend (web Angular y apps Flutter) que digitalizan pagos, banca y operaciones críticas para fintechs y sus clientes enterprise — de requerimiento a producción, con calidad y métricas de uso reales.`;
  readonly ctaProjects = $localize`:@@home.cta.projects:Ver proyectos`;
  readonly ctaContact = $localize`:@@home.cta.contact:Contactar`;
  readonly featuredTitle = $localize`:@@home.featured.title:Proyectos destacados`;
  readonly featuredLead = $localize`:@@home.featured.lead:Casos con métricas reales del CV: pagos, banca móvil y onboarding digital.`;
  readonly viewCase = $localize`:@@home.featured.view:Ver caso`;
  readonly moreTitle = $localize`:@@home.more.title:Más proyectos`;
  readonly moreLead = $localize`:@@home.more.lead:PagoChinchin, Business, Botly, BDV Cambios e INTT Multas.`;
}
