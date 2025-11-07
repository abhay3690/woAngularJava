import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from './child/child';

@Component({
  selector: 'app-decorators',
  standalone: true,
  imports: [CommonModule, Child], 
  templateUrl: './decorators.html',
  styleUrls: ['./decorators.css'],
})
export class Decorators {
  parentMessage: string = 'Hello Child! (from Parent)';
  receivedMessage: string = '';

  handleChildMessage(event: string) {
    this.receivedMessage = event;
  }
}
