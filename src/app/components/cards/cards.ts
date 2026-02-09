import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cards.html',
  styleUrls: ['./cards.css'],
})
export class Cards {
  filtroSelecionado: string = 'todos';

  cursos = [
    {
      titulo: 'HTML para Iniciantes',
      descricao: 'Playlist de 20 aulas de HTML',
      imagem: 'assets/aulaHTML.png',
      categoria: 'html'
    },
    {
      titulo: 'CSS do Zero',
      descricao: 'Estilização moderna com CSS',
      imagem: 'assets/aulaCSS.png',
      categoria: 'css'
    },
    {
      titulo: 'Angular Essencial',
      descricao: 'Fundamentos do Angular',
      imagem: 'assets/aulaAngular.png',
      categoria: 'angular'
    },
    {
      titulo: 'React Básico',
      descricao: 'Componentes e hooks',
      imagem: 'assets/aulaReact.png',
      categoria: 'react'
    }
  ];

  get cursosFiltrados() {
    if (this.filtroSelecionado === 'todos') {
      return this.cursos;
    }
    return this.cursos.filter(
      curso => curso.categoria === this.filtroSelecionado
    );
  }
}
