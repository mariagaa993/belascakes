import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'hero-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroCake: string = '../../../assets/images/hero-cake.png';
}
