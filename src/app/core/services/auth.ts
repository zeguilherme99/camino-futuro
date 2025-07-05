import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor() { }

  private userRole: string | null = null;

  loginMock(role: string) {
    this.userRole = role;
  }

  isAuthenticated(): boolean {
    return !!this.userRole;
  }

  getRole(): string | null {
    return this.userRole;
  }
}
