import { Component } from '@angular/core';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { FiyatlandirmaComponent } from './fiyatlandirma/fiyatlandirma.component';
import { DisHijyenBeltComponent } from './dis-hijyen-belt/dis-hijyen-belt.component';
import { PhoneButtonComponent } from './phone-button/phone-button.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [HeroComponentComponent,
    // VerilenHizmetlerComponent, 
    // FiyatlandirmaComponent, DisHijyenBeltComponent 
  ]
})
export class HomePageComponent {
  ngOnInit(): void {
    this.launchConfetti();
  }

  launchConfetti(): void {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 }
    });
  }
}

