import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import confetti from 'canvas-confetti';
import { HeroComponentComponent } from './hero-component/hero-component.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [ HeroComponentComponent]
})
export class HomePageComponent {
  confettiLaunched = false;
  touchStartX = 0;
  touchEndX = 0;
  touchStartY = 0;
  touchEndY = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/') {
          this.resetConfetti(); // Reset so it triggers every time
          this.launchConfetti();
        }
      }
    });
  }

  // 🔹 Trigger confetti on click/tap
  @HostListener('click') onUserClick() {
    this.triggerConfetti();
  }

  // 🔹 Detect touch start for swipe gesture
  @HostListener('touchstart', ['$event']) onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  // 🔹 Detect touch end and trigger confetti if swipe detected
  @HostListener('touchend', ['$event']) onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
    this.detectSwipe();
  }

  // 🔹 Check if a swipe happened (left, right, up, down)
  private detectSwipe(): void {
    const swipeDistanceX = Math.abs(this.touchEndX - this.touchStartX);
    const swipeDistanceY = Math.abs(this.touchEndY - this.touchStartY);

    if (swipeDistanceX > 50 || swipeDistanceY > 50) { // Adjust sensitivity here
      this.triggerConfetti();
    }
  }

  // 🔹 Reset confetti state when navigating back to home page
  private resetConfetti(): void {
    this.confettiLaunched = false;
  }

  // 🔹 Launch confetti effect
  private triggerConfetti(): void {
    if (!this.confettiLaunched) {
      this.launchConfetti();
      this.confettiLaunched = true;
      setTimeout(() => this.confettiLaunched = false, 3000); // Allow retrigger after 3s
    }
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
