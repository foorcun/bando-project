import { Component } from '@angular/core';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { FiyatlandirmaComponent } from './fiyatlandirma/fiyatlandirma.component';
import { DisHijyenBeltComponent } from './dis-hijyen-belt/dis-hijyen-belt.component';
import { PhoneButtonComponent } from './phone-button/phone-button.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import confetti from 'canvas-confetti';
import { NavigationEnd, Router } from '@angular/router';

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
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/') {
        this.launchConfetti();
      }
    });
  }

  launchConfetti(): void {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        spread: 150,
        origin: { x: Math.random(), y: Math.random() - 0.2 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }

}

