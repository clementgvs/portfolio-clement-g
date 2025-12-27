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
    {title: "INSA Rennes", date: "sep. 2023 - aujourd'hui", text: "Études d'ingénieur, département Informatique, option Cybersécurité."},
    {title: "", date: "", text: ""},
    {title: "", date: "", text: ""},
  ];
}
