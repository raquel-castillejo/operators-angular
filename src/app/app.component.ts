import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number1 !: number;
  number2 !: number;

  addition = false;
  substract = false;
  product = false;
  division = false;

  result !: string;

  operate() {
    this.result = "";

    if(this.addition) {
      let solved = this.number1 + this.number2;
      this.result += `La suma de los números ${this.number1} y ${this.number2} es ${solved}.`;
    };

    if(this.substract) {
      let solved = this.number1 - this.number2;
      this.result += `La resta de los números ${this.number1} y ${this.number2} es ${solved}.`;
    };

    if(this.product) {
      let solved = this.number1 * this.number2;
      this.result += `La multiplicación de los números ${this.number1} y ${this.number2} es ${solved}.`;
    };

    if(this.division) {
      let solved = this.number1 / this.number2;
      this.result += `La división de los números ${this.number1} y ${this.number2} es ${solved}.`;
    }
  }
}
