import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { name: 'Java', icon: 'java.png',
      text: "Mon premier langage de programmation. Je l'ai pratiqué sur des projets personnels, approfondi à l'INSA Rennes, puis utilisé en stage pour développer un logiciel pédagogique en JavaFX. J'y associe Spring (API REST, JPA), Maven, JUnit et Mockito." },
    { name: 'C', icon: 'c.png',
      text: "Appris durant ma formation à l'INSA Rennes avec de bons résultats, j'ai pris goût à ce langage et à la rigueur qu'il demande." },
    { name: 'Python', icon: 'python.png',
      text: "Je l'ai utilisé pour la démonstration de mon projet LeexEye devant le jury du concours Samsung Solve for Tomorrow, organisé entre plusieurs lycées de France." },
    { name: 'Flutter / Dart', icon: 'flutter.png',
      text: "Flutter est le framework (basé sur Dart) que j'utilise dans mes projets mobiles, académiques comme associatifs. J'ai découvert le mobile avec des applications natives (Android/Kotlin) avant de passer au multiplateforme." },
    { name: 'Web & Angular', icon: 'angular.png',
      text: "Je m'intéressais au développement web depuis un moment sans vraiment le pratiquer. C'est un projet de ma formation qui m'a fait utiliser Angular et TypeScript concrètement, puis je les ai approfondis pour le site du festival Rock’n Solex et pour ce portfolio." },
    { name: 'Git', icon: 'git.png',
      text: "Un outil indispensable que j'utilise depuis longtemps sur tous mes projets, et que je maîtrise pleinement depuis ma formation à l'INSA Rennes, y compris en équipe avec GitLab CI." },
    { name: 'SQL', icon: 'sql.png',
      text: "Utilisé d'abord par curiosité, puis de façon approfondie au début de ma formation. J'ai travaillé avec PostgreSQL et MySQL, et abordé MongoDB côté NoSQL." },
    { name: 'Linux & Bash', icon: 'bash.png',
      text: "Je l'ai souvent utilisé sur mes projets sans bien le comprendre ; c'est durant ma formation que j'ai vraiment compris son fonctionnement. Je m'en sers aujourd'hui pour administrer mon serveur dédié OVH, avec Docker." }
  ];

  currentIndex = 0;

  get visibleCards(): number {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 700 ? 1 : 2.85;
    }
    return 2.85;
  }

  next() {
    if (this.canGoNext) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get canGoNext(): boolean {
    return this.currentIndex < this.skills.length - Math.floor(this.visibleCards);
  }
}