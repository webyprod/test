import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  items: Item[];

  details: string;



  constructor() {
    this.items = [
      {
        id: 1,
        marque: "volkswagen",
        modele: "golf",
        description: "Belle voiture allemande"

      },
      {
        id: 2,
        marque: "renault",
        modele: "clio",
        description: "belle voiture française 1"

      },
      {
        id: 3,
        marque: "peugeot",
        modele: "208",
        description: "belle voiture française 2"

      }
    ]
   }

  ngOnInit() {
  }


  getDetails(nb){

    this.details = this.items.filter(value => 
      { return value.id === nb})[0].description;

  }
}
