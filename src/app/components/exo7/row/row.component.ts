import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-roww]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowwComponent implements OnInit {

  @Input() col: number;

  constructor() { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }

}
