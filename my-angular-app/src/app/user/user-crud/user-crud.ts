import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface User {
  id?: number;
  name: string;
  email: string;
  contactNumber: string;
}


@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud {
  @Input() user: any = { name: '', email: '', contactNumber: '' };
  @Input() isEdit: boolean = false;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.save.emit(this.user);
      form.resetForm();
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}