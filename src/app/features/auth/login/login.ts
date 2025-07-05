import { Component } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.email.valid && this.password.valid) {
      this.auth
        .login(this.email.value!, this.password.value!)
        .then(() => {
          this.router.navigate(['/refugee']); // ou lógica de rota dinâmica
        })
        .catch((err) => {
          alert('Erro no login: ' + err.message);
        });
    } else {
      alert('Preencha email e senha corretamente.');
    }
  }
}
