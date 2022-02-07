import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @Input()
  public x = 0;

  @Input()
  public y = 0;

  constructor() { 

  }

  ngOnInit(): void {
  }
  addNumbers(x: number, y: number) {
    if(x === undefined && y === undefined) {
      return this.x + this.y;
    }
    if (isNaN(x) || isNaN(y)) {
      throw new Error('Parameters should be number.');
    }
    return x + y;
  }

  addInputNumbers() {
    return this.addNumbers(this.x, this.y);
  }
}
