import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  name     = '';
  email    = '';
  password = '';
  role     = '';
  error    = '';
  success  = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signup() {
    this.error   = '';
    this.success = '';

    if (!this.name || !this.email || !this.password || !this.role) {
      this.error = 'All fields are required including role.';
      return;
    }

    if (this.password.length < 6) {
      this.error = 'Password must be at least 6 characters.';
      return;
    }

    this.authService.signup(this.name, this.email, this.password, this.role).subscribe({
      next: () => {
        this.success = 'Account created! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        if (err.error?.message === 'User already exists') {
          this.error = 'Account already exists. Redirecting to login...';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        } else {
          this.error = err.error?.message || 'Signup failed. Please try again.';
        }
      }
    });
  }
}