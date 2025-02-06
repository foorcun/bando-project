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
    { imageUrl: '/images/hizmetler/bleaching.png', description: 'Diş beyazlatma (Bleaching)' },
    { imageUrl: '/images/hizmetler/acil-tedavi.png', description: 'Acil Diş Tedavisi' },
    { imageUrl: '/images/hizmetler/implant.png', description: 'İmplant' },
    { imageUrl: '/images/hizmetler/tel.png', description: 'Ortodonti (Tel Tedavisi)' },
    { imageUrl: '/images/hizmetler/plak.png', description: 'Ortodontı (Şeffaf Plak)' },
    { imageUrl: '/images/hizmetler/dolgu.png', description: 'Diş Dolgusu' },
    { imageUrl: '/images/hizmetler/kanal.png', description: 'Kanal Tedavisi' },
    { imageUrl: '/images/hizmetler/kanal.png', description: 'Kanal Yineleme (Retreatment)' },
    { imageUrl: '/images/hizmetler/gulus.png', description: 'Gülüş Tasarımı' },
    { imageUrl: '/images/hizmetler/cekim.png', description: 'Diş Çekimi' },
    { imageUrl: '/images/hizmetler/cerrahi.png', description: 'Cerrahi Çekim' },
    { imageUrl: '/images/hizmetler/hareketli.png', description: 'Hareketli Protez' },
    { imageUrl: '/images/hizmetler/zirkonyum.png', description: 'Zirkonyum' },
    { imageUrl: '/images/hizmetler/tas.png', description: 'Diş Taşı Temizliği' },
    { imageUrl: '/images/hizmetler/laminate.png', description: 'Laminate' },
    { imageUrl: '/images/hizmetler/20lik.png', description: '20lik Çekimi' },
    { imageUrl: '/images/hizmetler/botox.png', description: 'Botox' },
    { imageUrl: '/images/hizmetler/plak.png', description: 'Gece Plağı' },
    { imageUrl: '/images/hizmetler/sabit.png', description: 'Sabit Protez' },
    { imageUrl: '/images/hizmetler/cocuk.png', description: 'Çocuk Diş Hekimliği (Pedodonti)' },
    { imageUrl: '/images/hizmetler/yer.png', description: 'Yer Tutucu' },
    { imageUrl: '/images/hizmetler/dijital.png', description: 'Dijital Ölçü' },
    { imageUrl: '/images/hizmetler/et.png', description: 'Diş Eti Sağlığı' },
    { imageUrl: '/images/hizmetler/plak.png', description: 'Bruksizm Tedavisi' }
  ];
  constructor(private router: Router) { }

  onCardClick(card: Card): void {
    // Navigate to the detail page with the description as a route parameter
    this.router.navigate(['/hizmetlerimiz', card.description]);
  }
}
