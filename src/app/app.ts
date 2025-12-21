import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Academic } from "./academic/academic";
import { Contact } from "./contact/contact";
import { Landing } from "./landing/landing";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { Professional } from "./professional/professional";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Academic, Contact, Landing, Skills, Projects, Professional],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-clement-g');
}
