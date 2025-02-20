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
    { name: 'Ali', role: 'Vokal', instagram: 'https://www.instagram.com/on7bando', twitter: '#' },
    { name: 'Veli', role: 'Gitar', instagram: '#', twitter: '#' },
    { name: 'Ayşe', role: 'Bas Gitar', instagram: '#', twitter: '#' },
    { name: 'Mehmet', role: 'Bateri', instagram: '#', twitter: '#' },
    { name: 'Zeynep', role: 'Klavye', instagram: '#', twitter: '#' }
  ];
}
