import { Component } from '@angular/core';

@Component({
  selector: 'app-career-history',
  imports: [],
  templateUrl: './career-history.html',
  styleUrl: './career-history.scss',
})
export class CareerHistory {
  items = [
    { title: "École des Transmissions, du Numérique et du Cyber", date: "juin - juil. 2026", text: "Stagiaire ingénieur logiciel au Centre de Simulation Opérationnelle. Conception et développement en JavaFX d’un logiciel pédagogique d’exercice pour des sections de 15 à 25 stagiaires, et de modules de simulation et scénarios sous Virtual Battlespace (VBS)." },
    { title: "Rock’n Solex Festival", date: "nov. 2025 - nov. 2026", text: "Responsable Web & Mobile (bénévole). Conception, développement et gestion de l’application mobile, du site web et du serveur dédié OVH du festival." },
    { title: "Vichy Communauté", date: "juil. - août 2024", text: "Stagiaire à la Direction des Systèmes d’Information. Maintenance réseau (brassage, configuration de switchs, déploiement de bornes) et mise en place d’infrastructures temporaires pour les services et événements publics." },
    { title: "INSA Rennes", date: "2023 - aujourd’hui", text: "Diplôme d’ingénieur en informatique, option Sécurité. Semestre Erasmus+ à l’Universitatea Politehnica din București (mars - juin 2027)." },
    { title: "Samsung Solve for Tomorrow", date: "mai 2022", text: "3e place nationale avec le projet LeexEye : prototype de contrôle sans contact (eye-tracking et reconnaissance vocale) pour les handicaps moteurs lourds." },
    { title: "Lycée Albert Londres – Vichy", date: "2020 - 2023", text: "Baccalauréat général, mention Très Bien. Spécialités Mathématiques et NSI, option Mathématiques expertes." },
  ];
}