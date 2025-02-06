import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-hizmetlerimiz-page',
  templateUrl: './hizmetlerimiz-page.component.html',
  styleUrls: ['./hizmetlerimiz-page.component.scss'],
  imports: [CommonModule]
})
export class HizmetlerimizPageComponent {
  cards: Card[] = [
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Düğün' },
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Gelin Alma' },
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Kına' },
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Sünnet' },
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Milli Bayram' },
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Spor Etkinliği' },
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Açılış' },
    { imageUrl: '/images/hizmetler/dugun.png', description: 'Etkinlik' },
  ];
  constructor(private router: Router) { }

  onCardClick(card: Card): void {
    // Navigate to the detail page with the description as a route parameter
    this.router.navigate(['/hizmetlerimiz', card.description]);
  }
}
