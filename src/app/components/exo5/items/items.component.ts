import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: '[app-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() id: number;
  @Input() marque: string;
  @Input() modele: string;

  @Output() det = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  details(nb){
    this.det.emit(nb);
  }

}
