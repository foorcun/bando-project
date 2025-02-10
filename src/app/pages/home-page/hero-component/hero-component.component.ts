import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.scss',
  imports: [CommonModule]
})
export class HeroComponentComponent implements OnInit {

  backgroundImages: string[] = [
    '/images/hero-photo1.png',
    '/images/hero-photo2.png',
    '/images/hero-photo3.png'
  ];
  currentImageIndex: number = 0;
  backgroundImage: string = this.backgroundImages[this.currentImageIndex];
  nextBackgroundImage: string = this.backgroundImages[(this.currentImageIndex + 1) % this.backgroundImages.length];
  isFading: boolean = false; // Controls fade animation

  constructor(private router: Router) {}

  ngOnInit() {
    // Automatically change background every 5 seconds
    setInterval(() => {
      this.fadeToNextImage();
    }, 5000);
  }

  goContactPage() {
    this.router.navigate(['hizmetlerimiz-page']);
  }

  fadeToNextImage() {
    this.isFading = true;

    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
      this.backgroundImage = this.backgroundImages[this.currentImageIndex];
      this.nextBackgroundImage = this.backgroundImages[(this.currentImageIndex + 1) % this.backgroundImages.length];
      this.isFading = false;
    }, 800); // Matches fade-out time
  }
}


