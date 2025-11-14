import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.html',
  styleUrl: './forgetpassword.css',
})
export class Forgetpassword {

  forgetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.forgetForm.invalid) return;

    const payload = {
      email: this.forgetForm.value.email
    };

    this.authService.forgetPassword(payload).subscribe({
      next: (res) => {
        alert("OTP sent successfully!");
        this.router.navigate(['/resetpassword']);  // Redirect to reset page
      },
      error: (err) =>
        alert(err.error.message || "Failed to send OTP")
    });
  }
}