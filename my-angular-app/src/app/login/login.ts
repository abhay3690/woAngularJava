import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    // Call your backend here (replace dummy token with API response)
    this.auth.login('dummy-jwt-token');
    this.router.navigate(['/home']);
  }

  reg() {
    // Call your backend here (replace dummy token with API response)
    // this.auth.login('dummy-jwt-token');
    this.router.navigate(['/register']);
  }
}