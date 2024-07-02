import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'why-us-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
  quality: string = '../../../assets/images/quality.png';
  cake: string = '../../../assets/images/cake.png';
  proven: string = '../../../assets/images/proven.png';
}
