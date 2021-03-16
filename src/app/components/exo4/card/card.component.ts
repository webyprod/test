import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  nom: string;
  photo: string;
  cri: string;
  

  constructor() {

    this.nom = "chien";
    this.photo = "https://static.wamiz.com/images/news/facebook/article/chien-os-fb-594cdb7b3d78d.jpg";
    this.cri = "OUAF";
   }

  ngOnInit() {
  }

  bruit(){
    alert(this.cri);
  }

}
