import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials = {
    email: '',
    password: ''
  };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    (this.authService.login(this.credentials) as any).subscribe({
      next: (response: any) => {
        console.log('Login success:', response);
        localStorage.setItem('jwt_token', response.token);
        this.router.navigate(['']); // navigate to a secure page
      },
      error: (err: any) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid email or password!';
      }
    });
  }
  
}