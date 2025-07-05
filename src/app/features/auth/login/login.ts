import { Component } from '@angular/core';
import {Auth} from '../../../core/services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private auth: Auth, private router: Router) {}

  loginAsRefugee() {
    this.auth.loginMock('refugee');
    this.router.navigate(['/refugee']);
  }

  loginAsCompany() {
    this.auth.loginMock('company');
    this.router.navigate(['/company']);
  }
}
