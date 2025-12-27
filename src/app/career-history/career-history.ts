import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-career-history',
  imports: [],
  templateUrl: './career-history.html',
  styleUrl: './career-history.scss',
})
export class CareerHistory {
  items = [
    {title: "McDonald’s Vichy", date: "juil. - août 2023, 2024 et 2025", text: "Crew Member. Accueil et service client, préparation des commandes dans le respect des normes d’hygiène et travail en équipe."},
    {title: "Vichy Communauté", date: "juil. - août 2024", text: "Stagiaire – service informatique. Étude et déploiement de matériel informatique pour l’organisation d’événements sportifs (Jeux Olympiques)."},
    {title: "Rock’n Solex Festival", date: "nov. 2025 - aujourd’hui", text: "Web & Mobile App Manager / Developer (bénévole). Développement et gestion d’applications web et mobiles utilisées par les bénévoles et le public."},
    {title: "Lycée Albert Londres – Vichy", date: "2020 - 2023", text: "Baccalauréat général, spécialité mathématiques, option mathématiques expertes."},
    {title: "INSA Rennes", date: "2023 - aujourd’hui", text: "Études d’ingénieur en informatique et génie logiciel, option Cybersécurité."},
    {title: "Samsung Solve for Tomorrow", date: "avr. 2022", text: "3e place au concours Samsung Solve for Tomorrow."},
    {title: "Baccalauréat – Mention Très Bien", date: "juil. 2023", text: "Obtention du baccalauréat avec mention Très Bien."},
  ];
}
