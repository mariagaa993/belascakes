import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'about-us-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  aboutus: string = '../../../assets/images/aboutus.jpg';
}
