import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-rows]',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {

  @Input() id: number;
  @Input() username: string;
  @Input() mail: string;

  constructor() { }

  ngOnInit() {
  }

}
