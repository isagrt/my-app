import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  name =' Isadora'
  mensagem(): string{
    return 'Olá mundo!'
  }
}
