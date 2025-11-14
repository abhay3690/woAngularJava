import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resetpassword',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resetpassword.html',
  styleUrl: './resetpassword.css',
})
export class Resetpassword {

  resetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.resetForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        otp: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }
// Custom validator
  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const pass = form.get('newPassword')?.value;
    const confirm = form.get('confirmPassword')?.value;

    return pass === confirm ? null : { passwordMismatch: true };
  }

  submit() {
     if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }
    const payload = {
      email: this.resetForm.value.email,
      otp: this.resetForm.value.otp,
      newPassword: this.resetForm.value.newPassword
    };

    this.authService.resetPassword(payload).subscribe({
      next: (res) => {
        alert("Password reset successful!");
        this.router.navigate(['/login']);
      },
      error: (err) => alert("Failed: " + err.error.message || 'Error occurred')
    });
  }
}
