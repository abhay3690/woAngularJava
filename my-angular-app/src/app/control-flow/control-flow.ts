import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-flow.html',
  styleUrls: ['./control-flow.css'],
})
export class ControlFlow {
  selectedCaste: string = '';
}
