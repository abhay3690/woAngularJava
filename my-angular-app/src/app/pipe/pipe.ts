import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import { MultiplyPipe } from './multiply.pipe';
@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, ReversePipe, MultiplyPipe],
  templateUrl: './pipe.html',
  styleUrls: ['./pipe.css'],
})
export class Pipe {
  title: string = 'Angular Pipes Demonstration';
  name: string = 'John Doe';
  today: Date = new Date();
  amount: number = 1299.75;
  percentValue: number = 0.8567;
  jsonData = { name: 'Alex', age: 25, city: 'New York' };
  message: string = 'Angular Pipes are powerful!';
  numberValue: number = 10;
}