import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarBootstrapComponent } from './common/navbar-bootstrap/navbar-bootstrap.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarBootstrapComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bando-project';
}
