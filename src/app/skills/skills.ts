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
      text: "Il s'agit du langage avec lequel j'ai commencé la programmation. J'ai eu l'occasion de participer à un gros projet avec celui-ci. Par la suite, j'ai maintenu mes connaissances dessus durant ma formation à l'INSA Rennes." },
    { name: 'C', icon: 'c.png', 
      text: "Après avoir appris le C durant ma formation, et ce avec de bons résultats, j'ai pris goût à l'utiliser." },
    { name: 'Python', icon: 'python.png', 
      text: "À l'occasion d'un concours organisé par Samsung France entre plusieurs lycée de France, j'ai utilisé Python pour la démonstration de ce projet au jury." },
    { name: 'Flutter', icon: 'flutter.png', 
      text: "Flutter est un langage que j'ai utilisé dans de nombreux projets et que j'ai appris à utiliser à travers mon expérience des applications native mais aussi de divers projets durant ma formation et en dehors." },
    { name: 'Web and Angular', icon: 'angular.png', 
      text: "Je me suis intéressé au développement web et à Angular il y a déjà quelque temps, sans réellement les pratiquer au départ. C’est à l’occasion d’un projet réalisé durant ma formation que j’ai commencé à les utiliser concrètement, puis à les approfondir pour la réalisation de ce portfolio."},
    { name: 'Git', icon: 'git.png', 
      text: "Git est un indispensable que j'ai commencé à maitriser il y a longtemps pour tout mes précédents projets et que j'ai maitrisé complètement au cours de ma formation à l'INSA Rennes" },
    { name: 'SQL', icon: 'sql.png', 
      text: "J’ai d’abord utilisé SQL par curiosité et pour effectuer quelques tests il y a plusieurs années. C’est au début de ma formation que j’ai ensuite eu l’occasion de le pratiquer de manière plus approfondie, ce qui m’a permis d’en comprendre les bases solides et les usages courants."},
    { name: 'Bash', icon: 'bash.png', 
      text: "J'ai eu l'occasion d'utiliser Bash à de nombreuses reprises lors de différents projets il y a longtemps sans le comprendre. C'est durant ma formation que j'ai eu l'occasion de le comprendre plus." }
  ];

  currentIndex = 0; 
  
  get visibleCards(): number {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 700 ? 1 : 2.85;
    }
    return 2.85;
  }

  next() {
    if (this.currentIndex < this.skills.length - Math.floor(this.visibleCards)) {
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

  trackByName = (_: number, skill: any) => skill.name;
}
