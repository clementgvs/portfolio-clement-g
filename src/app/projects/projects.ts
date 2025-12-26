import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Portfolio Personnel',
      link: 'https://monportfolio.com',
      description: "Mon site portfolio, réalisé avec Angular pour présenter mes projets et compétences."
    },
    {
      title: 'Application Flutter',
      link: null,
      description: "Une application mobile développée en Flutter dans le cadre d'un projet étudiant."
    },
    {
      title: 'Site Web d\'association',
      link: 'https://asso-example.com',
      description: "Site web développé pour une association locale, avec HTML, CSS et JavaScript."
    },
    {
      title: 'Mini Jeu en Python',
      link: null,
      description: "Un petit projet ludique réalisé en Python pour apprendre la programmation orientée objet."
    },
    {
      title: 'Gestion de Base de Données SQL',
      link: null,
      description: "Projet académique sur la création et manipulation de bases de données SQL."
    },
    {
      title: 'Automatisation Bash',
      link: null,
      description: "Scripts Bash pour automatiser certaines tâches répétitives sur mon ordinateur."
    }
  ];
}
