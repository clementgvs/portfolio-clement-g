import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from "./contact/contact";
import { Landing } from "./landing/landing";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { CareerHistory } from "./career-history/career-history";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact, Landing, Skills, Projects, CareerHistory, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-clement-g');
  topArrowPath = 'top-arrow.png';
  nightThemePath = 'dark-theme.svg';
  currentLang = true; //true -> FR | false -> EN
  nextLang = this.currentLang ? "FR" : "EN";
  showGoToTopBtn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0;

    this.showGoToTopBtn = scrollPosition > 250;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  switchLang(){
    this.currentLang = !this.currentLang;
    this.nextLang = this.currentLang ? "FR" : "EN";
  }

  changeColorTheme(){
    //TODO
    
  }
}
