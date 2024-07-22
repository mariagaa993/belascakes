import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'rrss-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rrss.component.html',
  styleUrl: './rrss.component.css'
})
export class RrssComponent {
  imgInstagram: string = '../../../assets/images/test.jpg';
}
