import {Component} from '@angular/core'


@Component({
  selector:'page-bim',
  templateUrl:'bim.html'
})

export class BimPage{
  height: number;
  weight: number;

  bmiValue: number;
  bmiMessage: String;
  constructor(){

  }
  
private setBMIMessage() {
  if (this.bmiValue < 18.5) {
    this.bmiMessage = "Underweight"
  }

  if (this.bmiValue > 18.5 && this.bmiValue < 25) {
    this.bmiMessage = "Normal"
  }

  if (this.bmiValue > 25 && this.bmiValue < 30) {
    this.bmiMessage = "Overweight"
  }

  if (this.bmiValue > 30) {
    this.bmiMessage = "Obese"
  }
}

  calculateBMI() {
  if (this.weight > 0 && this.height > 0) {
    let finalBmi = this.weight / (this.height / 100 * this.height / 100);
    this.bmiValue = parseFloat(finalBmi.toFixed(2));
    this.setBMIMessage();
  }
}
}