import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() id: number;
  @Input() username: string;
  @Input() email: string;

  constructor() {
    
   }

  ngOnInit() {
  }

}
