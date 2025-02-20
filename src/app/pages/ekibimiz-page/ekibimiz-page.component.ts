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
    { name: 'Trompet', role: 'Trompet', instagram: 'https://www.instagram.com/on7bando', twitter: '#' },
    { name: 'Saksafon', role: 'Saksafon', instagram: 'https://www.instagram.com/on7bando', twitter: '#' },
    { name: 'Trombon', role: 'Trombon', instagram: 'https://www.instagram.com/on7bando', twitter: '#' },
    { name: 'Davul', role: 'Davul', instagram: 'https://www.instagram.com/on7bando#', twitter: '#' },
    { name: 'Trampet', role: 'Trampet', instagram: 'https://www.instagram.com/on7bando', twitter: '#' }
  ];
}
