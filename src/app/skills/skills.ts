import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { name: 'Java', icon: 'java.png', text: 'Avancé' },
    { name: 'C', icon: 'c.png', text: 'Avancé' },
    { name: 'Python', icon: 'python.png', text: 'Avancé' },
    { name: 'Flutter', icon: 'flutter.png', text: 'Avancé' },
    { name: 'Web and Angular', icon: 'angular.png', text: 'Avancé' },
    { name: 'Git', icon: 'git.png', text: 'Intermédiaire' },
    { name: 'SQL', icon: 'sql.png', text: 'Intermédiaire' },
    { name: 'Bash', icon: 'bash.png', text: 'Intermédiaire' }
  ];

  currentIndex = 0; 
  visibleCards = 3;

  next() {
    if (this.currentIndex < this.skills.length - this.visibleCards) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  trackByName = (_: number, skill: any) => skill.name;
}
