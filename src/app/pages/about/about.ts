import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly title = $localize`:@@about.title:Sobre mí`;
  readonly whoTitle = $localize`:@@about.who.title:Qué soy`;
  readonly who = $localize`:@@about.who.body:Ingeniero de Sistemas (UNIMET, Caracas). ~5 años en frontend: de pasante a Coordinador Frontend en Chinchin (fintech #1 de Venezuela), manteniendo, desarrollando, diseñando y coordinando webs y apps propias y de clientes (Banco Plaza, Exterior, BDV, BDT, PedidosYa, INTT, Yummy, Yango, …).`;
  readonly knowTitle = $localize`:@@about.know.title:Qué sé`;
  readonly know = $localize`:@@about.know.body:Angular (web), Flutter (móvil), Figma, Jira, IA aplicada, Node.js + PostgreSQL/Mongo a nivel práctico, Postman/Newman.`;
  readonly seekTitle = $localize`:@@about.seek.title:Qué busco`;
  readonly seek = $localize`:@@about.seek.body:Rol frontend remoto o presencial fuera de Venezuela, con posibilidad de relocation.`;
  readonly eduTitle = $localize`:@@about.edu.title:Educación`;
  readonly eduItems = [
    $localize`:@@about.edu.unimet:Ingeniero de sistemas — Universidad Metropolitana`,
    $localize`:@@about.edu.santa:Bachiller en ciencias — Colegio Santa Rosa de Lima`,
    $localize`:@@about.edu.uma:Diplomado en Inteligencia Artificial Aumentada — Universidad Monteávila (126 h)`,
  ];
  readonly contactCta = $localize`:@@about.cta:Ir a contacto`;
  readonly galleryTitle = $localize`:@@about.gallery.title:Momentos`;
  readonly galleryLead = $localize`:@@about.gallery.lead:Graduación UNIMET, viajes y el día a día fuera de la pantalla.`;

  readonly photos = [
    {
      src: 'assets/photos/about-sagrada.jpg',
      alt: $localize`:@@about.photo.sagrada:Jhoel frente a la Sagrada Família`,
    },
    {
      src: 'assets/photos/about-graduation.jpg',
      alt: $localize`:@@about.photo.graduation:Graduación UNIMET con diploma`,
    },
    {
      src: 'assets/photos/about-plaza-mayor.jpg',
      alt: $localize`:@@about.photo.plaza:Jhoel en Plaza Mayor, Madrid`,
    },
    {
      src: 'assets/photos/about-cafe.jpg',
      alt: $localize`:@@about.photo.cafe:Jhoel en un café al aire libre`,
    },
  ];
}
