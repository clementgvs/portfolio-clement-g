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
      title: 'Alterya',
      link: 'https://github.com/clementgvs/alterya',
      description: "Plugin Minecraft pour serveur P.V.P Faction (1.7.10), séparé en trois modules : Core, Faction et Moderation."
    },
    {
      title: 'SafeTrack',
      link: 'https://github.com/clementgvs/safetrack',
      description: "Extension Chrome permettant de suivre les fuites de sécurité liées à la navigation web."
    },
    {
      title: 'SportStats',
      link: 'https://github.com/clementgvs/sportstats',
      description: "Application Android native développée en Kotlin pour suivre mes statistiques personnelles de musculation."
    },
    {
      title: 'Portfolio personnel',
      link: 'https://github.com/clementgvs/portfolio-clement-g',
      description: "Portfolio personnel développé avec Angular pour présenter mes projets et compétences."
    },
    {
      title: 'LeexEye',
      link: 'https://github.com/clementgvs/leexeye',
      description: "Projet visant à faciliter l’accès au numérique pour les personnes en situation de handicap moteur, réalisé avec Entreprendre Pour Apprendre et Samsung France."
    },
    {
      title: 'Oned',
      link: 'https://github.com/clementgvs/oned',
      description: "Application Android native de rappels personnalisés développée en Kotlin."
    },
    {
      title: 'Site web Festival Rock’n Solex',
      link: 'https://rocknsolex.fr/',
      description: "Site web officiel du Festival Rock’n Solex 2026."
    },
    {
      title: 'Application Festival Rock’n Solex',
      link: 'https://rocknsolex.fr/',
      description: "Application mobile du Festival Rock’n Solex 2026."
    },
    {
      title: 'Now Playing',
      link: null,
      description: "Plateforme académique affichant les informations d’un morceau en cours de lecture, depuis le streaming ou des supports physiques via recherche par code-barres.",
    }
  ];
}
