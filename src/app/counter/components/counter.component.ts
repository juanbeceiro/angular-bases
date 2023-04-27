import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter = 10;

  increaseBy(valor:number):void{
    this.counter += valor;
  }

  reset(){
    this.counter=10;
  }

}
