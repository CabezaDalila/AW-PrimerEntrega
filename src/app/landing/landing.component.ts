import { Component } from '@angular/core';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  cards = [
    {
      id: 1,
      title: 'Aprende Invirtiendo',
      description: 'Practica con dinero virtual y aprende los fundamentos de la inversión sin riesgos.',
      icon: 'fas fa-graduation-cap',
      state: 'inactive'
    },
    {
      id: 2,
      title: 'Simulaciones de Mercado',
      description: 'Experimenta con simulaciones realistas del mercado bursátil y toma decisiones informadas.',
      icon: 'fas fa-chart-line',
      state: 'inactive'
    },
    {
      id: 3,
      title: 'Comunidad de Inversores',
      description: 'Conecta con otros inversores jóvenes, comparte estrategias y aprende de los expertos.',
      icon: 'fas fa-users',
      state: 'inactive'
    },
    {
      id: 4,
      title: 'Análisis Personalizado',
      description: 'Recibe análisis detallados de tu portafolio y recomendaciones personalizadas.',
      icon: 'fas fa-analytics',
      state: 'inactive'
    },
    {
      id: 5,
      title: 'Retos y Competencias',
      description: 'Participa en desafíos de inversión y compite con otros usuarios para ganar premios.',
      icon: 'fas fa-trophy',
      state: 'inactive'
    },
    {
      id: 6,
      title: 'Educación Financiera',
      description: 'Accede a cursos y recursos educativos para mejorar tu conocimiento financiero.',
      icon: 'fas fa-book-open',
      state: 'inactive'
    }
  ]
}