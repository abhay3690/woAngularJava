import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginForm!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        localStorage.setItem('jwt_token', response.token);
        localStorage.setItem('userName', response.userName);
        this.router.navigate(['']);
      },
      error: () => {
        this.errorMessage = 'Invalid email or password!';
      }
    });
  }

  forgetpassword(): void {
    this.router.navigate(['/forgetpassword']);
  }
}














// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../service/auth.service';
// import { Router, RouterLink, RouterOutlet } from '@angular/router';
// import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
// import { CONSTANTS } from '../../constants';

// @Component({
//   selector: 'app-login',
//   imports: [FormsModule, RouterOutlet, RouterLink],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {
//   credentials = {
//     email: '',
//     password: ''
//   };
//   errorMessage = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onSubmit(): void {
//     (this.authService.login(this.credentials) as any).subscribe({
//       next: (response: any) => {
//         console.log('Login success:', response);
//         localStorage.setItem('jwt_token', response.token);
//         this.router.navigate(['']); // navigate to a secure page
//       },
//       error: (err: any) => {
//         console.error('Login failed:', err);
//         this.errorMessage = 'Invalid email or password!';
//       }
//     });
//   }
//   forgetpassword(): void {
//     this.router.navigate(['/forgetpassword']);
//   }
  
// }