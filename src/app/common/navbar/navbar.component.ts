import { Component, ViewEncapsulation } from '@angular/core';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [TopNavbarComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
encapsulation: ViewEncapsulation.Emulated, 
})
export class NavbarComponent {

}
