import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  courseName: string = 'Angular Fundamentals';
  isActive: boolean = true;
  currentDate: Date = new Date();
  rollNo: number = 101;

  minTestLength = 5;

  spanClassName = 'secondary';
  constructor() {
    console.log(this.courseName)

    this.courseName = 'Advanced Angular';

    console.log(this.courseName);
    // this.courseName = "123";
    setTimeout(() => {
      this.rollNo = 102;
    }, 10000);
  }
  showAlert(pama ?: string) {
    alert('Button clicked! Welcome to Angular Data Binding.');
  }
  onCityChange() : void {
    alert('City changed!');
  }
  addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
  onWindowSizeChange(){
    console.log("This is just testing...");
  }
  onModuEnter(){
    console.log("Mouse entered...");
  }
}
