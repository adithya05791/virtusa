import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Student' | 'Teacher' | 'Admin';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  signup(name: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { name, email, password, role });
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  logout(): void {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getRole(): string | null {
    return this.currentUser ? this.currentUser.role : null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}