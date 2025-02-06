import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-component',
  imports: [],
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.scss'
})
export class HeroComponentComponent {

  constructor(private router: Router) { }

  goContactPage() {
    this.router.navigate(['hizmetlerimiz-page']);
  }

}
