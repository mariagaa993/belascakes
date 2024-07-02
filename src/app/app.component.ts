import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { OrderComponent } from './components/order/order.component';
import { CallAttentionComponent } from './components/call-attention/call-attention.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent, WhyUsComponent, AboutUsComponent,
    RrssComponent, OrderComponent, CallAttentionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city: string = 'Madrid';
}

/* 
También puedo hacerlo todo junto. En vez de colocar
templateUrl y colocarle el nombre del archivo, puedo
colocar template: ` <h1>Hello, ... </h1> `. Igual con
los estilos: styles ` h1 { color: red; ... } `.

--dry-run sirve para simular la ejecución.

*/ 
