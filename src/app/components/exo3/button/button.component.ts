import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() actionn = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    console.log("here");
    this.actionn.emit(1);
  }

  decrement(){
    this.actionn.emit(-1);
  }

  increase(){
    let nm = prompt("Entrez un nombre");
    this.actionn.emit(Number(nm));
  }

}
