import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  role     = '';
  email    = '';
  password = '';
  error    = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.error = '';

    if (!this.role || !this.email || !this.password) {
      this.error = 'Please fill in all fields including your role.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        // Check if selected role matches the actual role in DB
        if (res.user.role !== this.role) {
          this.error = `Invalid role. Your account is registered as ${res.user.role}.`;
          return;
        }

        this.authService.setCurrentUser(res.user);

        if (res.user.role === 'Student')      this.router.navigate(['/student/dashboard']);
        else if (res.user.role === 'Teacher') this.router.navigate(['/teacher/dashboard']);
        else if (res.user.role === 'Admin')   this.router.navigate(['/admin/dashboard']);
      },
      error: () => {
        this.error = 'Invalid email or password. Please try again.';
      }
    });
  }
}