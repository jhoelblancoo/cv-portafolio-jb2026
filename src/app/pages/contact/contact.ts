import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly title = $localize`:@@contact.title:Contacto`;
  readonly lead = $localize`:@@contact.lead:Escribime por el canal que te resulte más cómodo. Sin formularios: solo links directos.`;
  readonly emailLabel = $localize`:@@contact.email:Email`;
  readonly whatsappLabel = $localize`:@@contact.whatsapp:WhatsApp`;
  readonly linkedinLabel = $localize`:@@contact.linkedin:LinkedIn`;
  readonly githubLabel = $localize`:@@contact.github:GitHub`;

  readonly email = 'jhoel10blanco@gmail.com';
  readonly whatsappUrl = 'https://wa.me/584126168206';
  readonly linkedinUrl = 'https://www.linkedin.com/in/jhoelblanco';
  readonly githubUrl = 'https://github.com/jhoelblancoo';
}
