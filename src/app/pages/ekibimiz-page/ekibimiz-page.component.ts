import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ekibimiz-page',
  imports: [CommonModule],
  templateUrl: './ekibimiz-page.component.html',
  styleUrl: './ekibimiz-page.component.scss'
})
export class EkibimizPageComponent {
  members = [
    { name: 'Ali', role: 'Trompet', instagram: 'https://www.instagram.com/on7bando', twitter: '#' },
    { name: 'Veli', role: 'Saksafon', instagram: 'https://www.instagram.com/on7bando', twitter: '#' },
    { name: 'Ayşe', role: 'Trampet', instagram: 'https://www.instagram.com/on7bando', twitter: '#' },
    { name: 'Mehmet', role: 'Davul', instagram: 'https://www.instagram.com/on7bando#', twitter: '#' },
    { name: 'Zeynep', role: 'Trombon', instagram: 'https://www.instagram.com/on7bando', twitter: '#' }
  ];
}
