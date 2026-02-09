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
    titulo: 'HTML Semântico',
    descricao: 'Boas práticas e acessibilidade',
    imagem: 'assets/aulaHTML2.png',
    categoria: 'html'
  },
  {
    titulo: 'Formulários em HTML',
    descricao: 'Inputs, validação e UX',
    imagem: 'assets/aulaHTML3.png',
    categoria: 'html'
  },

  {
    titulo: 'CSS do Zero',
    descricao: 'Estilização moderna com CSS',
    imagem: 'assets/aulaCSS.png',
    categoria: 'css'
  },
  {
    titulo: 'Flexbox na Prática',
    descricao: 'Layouts flexíveis e responsivos',
    imagem: 'assets/aulaCSS2.png',
    categoria: 'css'
  },
  {
    titulo: 'CSS Grid Layout',
    descricao: 'Criação de layouts avançados',
    imagem: 'assets/aulaCSS3.png',
    categoria: 'css'
  },
  {
    titulo: 'Animações com CSS',
    descricao: 'Transitions e Keyframes',
    imagem: 'assets/aulaCSS4.png',
    categoria: 'css'
  },

  {
    titulo: 'Angular Essencial',
    descricao: 'Fundamentos do Angular',
    imagem: 'assets/aulaAngular.png',
    categoria: 'angular'
  },
  {
    titulo: 'Angular Components',
    descricao: 'Criação e comunicação de componentes',
    imagem: 'assets/aulaAngular2.png',
    categoria: 'angular'
  },
  {
    titulo: 'Angular Services & DI',
    descricao: 'Services, Injeção de Dependência',
    imagem: 'assets/aulaAngular3.png',
    categoria: 'angular'
  },
  {
    titulo: 'Angular Routing',
    descricao: 'Rotas, guards e lazy loading',
    imagem: 'assets/aulaAngular4.png',
    categoria: 'angular'
  },

  {
    titulo: 'React Básico',
    descricao: 'Componentes e hooks',
    imagem: 'assets/aulaReact.png',
    categoria: 'react'
  },
  {
    titulo: 'React Hooks Avançados',
    descricao: 'useEffect, useContext e custom hooks',
    imagem: 'assets/aulaReact2.png',
    categoria: 'react'
  },
  {
    titulo: 'React com TypeScript',
    descricao: 'Tipagem e boas práticas',
    imagem: 'assets/aulaReact3.png',
    categoria: 'react'
  },
  {
    titulo: 'React Router',
    descricao: 'Rotas e navegação',
    imagem: 'assets/aulaReact4.png',
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
