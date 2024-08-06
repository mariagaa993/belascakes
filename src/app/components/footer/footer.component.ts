import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logo: string = '../../../assets/images/logo6.png';
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faClock = faClock;
}
