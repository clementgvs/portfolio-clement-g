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
      title: 'Pladenn',
      link: null,
      description: "Projet académique : application mobile de numérisation de médiathèque physique. Lecture de codes-barres par flux vidéo pour indexer ses albums, récupération automatique des métadonnées via des APIs web et affichage du morceau en cours de lecture."
    },
    {
      title: 'Application du festival Rock’n Solex',
      link: 'https://rocknsolex.fr/',
      description: "Application mobile publique du Festival Rock’n Solex 2026, conçue et développée en tant que responsable Web & Mobile."
    },
    {
      title: 'Site web du festival Rock’n Solex',
      link: 'https://rocknsolex.fr/',
      description: "Site web officiel du Festival Rock’n Solex 2026, hébergé sur un serveur dédié OVH que j'administre."
    },
    {
      title: 'Momentime',
      link: 'https://github.com/clementgvs/Momentime',
      description: "Application de fusion de calendriers avec ses proches pour identifier les créneaux communs et organiser des rencontres et événements."
    },
    {
      title: 'Portfolio personnel',
      link: 'https://github.com/clementgvs/portfolio-clement-g',
      description: "Portfolio réalisé avec Angular pour présenter mes projets et compétences informatiques."
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
      title: 'LeexEye',
      link: 'https://github.com/clementgvs/leexeye',
      description: "3e place nationale au concours Samsung Solve for Tomorrow : solution d'accès au numérique pour les personnes en situation de handicap moteur (eye-tracking et reconnaissance vocale), réalisée avec Entreprendre Pour Apprendre."
    },
    {
      title: 'Alterya',
      link: 'https://github.com/clementgvs/alterya',
      description: "Plugin Minecraft pour serveur P.V.P Faction (1.7.10), séparé en trois modules : Core, Faction et Moderation."
    }
  ];
}