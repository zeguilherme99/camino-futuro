import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from '../core/services/auth.service';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, AsyncPipe, NgIf],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  year = new Date().getFullYear();

  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
