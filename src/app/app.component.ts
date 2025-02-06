import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarBootstrapComponent } from './common/navbar-bootstrap/navbar-bootstrap.component';
import { FooterComponent } from './common/footer/footer.component';
import { WhatsappButtonComponent } from './pages/home-page/whatsapp-button/whatsapp-button.component';
import { PhoneButtonComponent } from './pages/home-page/phone-button/phone-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarBootstrapComponent, FooterComponent, PhoneButtonComponent, WhatsappButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bando-project';
}
