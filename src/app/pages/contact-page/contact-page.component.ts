import { Component } from '@angular/core';
import { PhoneButtonComponent } from '../home-page/phone-button/phone-button.component';
import { WhatsappButtonComponent } from '../home-page/whatsapp-button/whatsapp-button.component';
import { MapViewComponent } from '../../components/map-view/map-view.component';

@Component({
  selector: 'app-contact-page',
  imports: [MapViewComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  onSubmit() {
    alert('Message submitted! Thank you for contacting us.');
  }
}
