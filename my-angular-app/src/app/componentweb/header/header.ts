import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isLoggedIn = false;
  name: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    const token = localStorage.getItem('jwt_token');
    this.name = localStorage.getItem('userName') || '';
    this.isLoggedIn = !!token;
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('userName');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
