import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number;

  constructor() { 
    
  }

  ngOnInit() {
    this.counter = 5;
  }

  incrementByOne(nb){
    this.counter = this.counter + nb;
  }

}
