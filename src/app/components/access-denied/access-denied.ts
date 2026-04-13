import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-access-denied',
  imports: [CommonModule],
  templateUrl: './access-denied.html',
  styleUrl: './access-denied.css'
})
export class AccessDenied {
  userRole = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.userRole = this.authService.getRole() || '';
  }

  goBack() {
    const role = this.authService.getRole();
    if (role === 'Student') {
      this.router.navigate(['/student/dashboard']);
    } else if (role === 'Teacher') {
      this.router.navigate(['/teacher/dashboard']);
    } else if (role === 'Admin') {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}