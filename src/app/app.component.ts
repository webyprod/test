import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre: string;
  soustitre: string;
  description: string;
  lien: string;

  constructor(){
    this.titre = "TITRE";
    this.soustitre = "SOUSTITRE";
    this.description = "DESCRIPTION";
    this.lien = "LIEN";
  }
}
