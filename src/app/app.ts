import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Cards } from './components/cards/cards';
import { Footer } from './components/footer/footer';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Cards, Footer, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  nome = 'Isadora Goedert';

}
