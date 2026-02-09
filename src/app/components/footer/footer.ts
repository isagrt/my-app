import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  name = 'teste';
  nome = signal('Isadora Goedert');
  mudarNome(){
    this.nome.set("Dora")
  };
  mostraNome(){
    console.log(this.nome)
  };
  nomeToUpperCase(){
    this.nome.update((nome) => nome.toUpperCase());
  }

}
