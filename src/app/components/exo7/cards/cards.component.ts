import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  nom:string;
  prenom: string;
  age: number;
  ville: string;

  constructor() {
    this.nom = "Mccloud";
    this.prenom = "Fox";
    this.age = 30;
    this.ville = "PARIS";
   }

  ngOnInit() {
  }

}
