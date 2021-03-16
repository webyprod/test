import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TablesComponent implements OnInit {

  items: any[];

  constructor() {
    this.items = [
      {
        id: 1,
        username: "volkswagen",
        email: "golf",

      },
      {
        id: 2,
        username: "renault",
        email: "clio",

      },
      {
        id: 3,
        username: "peugeot",
        email: "208",
      }
    ]
   }

  ngOnInit() {
  }

  getColor(nb){
    if (nb % 2 == 0){
      return "blue"
    } else {
      return "green";
    }
  }

}
