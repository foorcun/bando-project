import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Card {
  imageUrl: string;
  description: string;
  details: string;
}

@Component({
  selector: 'app-hizmetlerimiz-page',
  templateUrl: './hizmetlerimiz-page.component.html',
  styleUrls: ['./hizmetlerimiz-page.component.scss'],
  imports: [CommonModule]
})
export class HizmetlerimizPageComponent {
  cards: Card[] = [
    {
      imageUrl: '/images/hizmetler/dugun.jpeg',
      description: 'Düğün',
      details: 'Düğünlerinizde unutulmaz bir atmosfer yaratmak için canlı müzik performansımızla sahnedeyiz. Orkestramızla romantik ve coşkulu anlarınıza eşlik ediyoruz.'
    },
    {
      imageUrl: '/images/hizmetler/gelin-alma.jpeg',
      description: 'Gelin Alma',
      details: 'Gelin alma merasimlerinde enerjik bando ekibimizle eğlenceyi başlatıyoruz. Davul, trampet ve nefesli çalgılarla unutulmaz bir başlangıç sunuyoruz.'
    },
    {
      imageUrl: '/images/hizmetler/kina-gecesi.jpeg',
      description: 'Kına',
      details: 'Kına gecelerinizde geleneksel müziklerden modern ezgilere kadar geniş repertuarımızla eğlencenizi unutulmaz kılıyoruz. Kına yakma ritüeline özel parçalarla geceyi süslüyoruz.'
    },
    {
      imageUrl: '/images/hizmetler/sunnet.jpeg',
      description: 'Sünnet',
      details: 'Sünnet düğünlerinde hem çocuklar hem de aileler için neşeli, hareketli müziklerle eğlenceyi zirveye taşıyoruz. Coşkulu marşlar ve oyun havalarıyla töreni canlandırıyoruz.'
    },
    {
      imageUrl: '/images/hizmetler/resmi-bayram.jpeg',
      description: 'Milli Bayram',
      details: 'Resmi törenlerde, yürüyüşlerde ve kutlamalarda bandomuz, coşkulu marşlarıyla etkinliklerinize gurur ve heyecan katıyor.'
    },
    {
      imageUrl: '/images/hizmetler/spor-etkinlikleri.jpeg',
      description: 'Spor Etkinliği',
      details: 'Spor müsabakalarında seyircileri ve sporcuları motive eden, heyecanı yükselten canlı müzik performanslarımızla etkinliğinize renk katıyoruz.'
    },
    {
      imageUrl: '/images/hizmetler/acilis.jpeg',
      description: 'Açılış',
      details: 'İşletme ve organizasyon açılışlarınıza enerjik ve dikkat çekici müziklerimizle büyük bir başlangıç yapmanıza yardımcı oluyoruz.'
    },
    {
      imageUrl: '/images/hizmetler/etkinlik.jpeg',
      description: 'Etkinlik',
      details: 'Özel organizasyonlar, partiler ve kurumsal etkinlikler için farklı tarzlarda canlı müzik performansları sunuyoruz.'
    },
    {
      imageUrl: '/images/hizmetler/avm.jpeg',
      description: 'AVM',
      details: 'Alışveriş merkezlerinde ziyaretçilerinize keyifli anlar yaşatmak için canlı müzik performansları sunuyoruz. Alışveriş deneyimini renklendiren ritimlerimizle AVM etkinliklerinizi unutulmaz kılıyoruz.'
    },

  ];
}
