import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  id: number;
  username: string;
  mail: string;

  constructor() {
  this.id=1;
  this.username="fox";
  this.mail="f.mccloud@gmail.com";

   }

  ngOnInit() {
  }

}
