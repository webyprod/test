import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  col: number;
  row: number;

  constructor() {
    this.col = 3;
    this.row = 4;
   }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }


}
