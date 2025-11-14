import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {

  registerForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe({
      next: (response: any) => {
        this.successMessage = 'Registration successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err: any) => {
        this.errorMessage = 'Email already exists or invalid input!';
      }
    });
  }
}



















// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { AuthService } from '../service/auth.service';

// @Component({
//   selector: 'app-register',
//   imports: [FormsModule, RouterLink],
//   templateUrl: './register.html',
//   styleUrl: './register.css',
// })
// export class Register {
//   user = {
//     name: '',
//     email: '',    
//     contactNumber: '',
//     password: ''
//   };

//   successMessage = '';
//   errorMessage = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onRegister(): void {
//     (this.authService.register(this.user) as any).subscribe({
//       next: (response: any) => {
//         console.log('Registration successful:', response);
//         this.successMessage = 'Registration successful! Redirecting to login...';
//         setTimeout(() => this.router.navigate(['/login']), 2000);
//       },
//       error: (err: any) => {
//         console.error('Registration failed:', err);
//         this.errorMessage = 'Email already exists or invalid input!';
//       }
//     });
//   }
// }