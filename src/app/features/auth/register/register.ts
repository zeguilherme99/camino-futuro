import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelect,
    MatOption,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  confirmPassword = new FormControl('', Validators.required);

  constructor(private auth: AuthService, private router: Router) {}

  role = new FormControl<'company' | 'refugee'>('refugee'); // valor default

  register() {
    if (
      this.email.valid &&
      this.password.valid &&
      this.password.value === this.confirmPassword.value
    ) {
      this.auth
        .register(this.email.value!, this.password.value!, this.role.value!)
        .then(() => {
          alert('Conta criada com sucesso!');
          this.router.navigate(['/']);
        })
        .catch(err => alert('Erro no cadastro: ' + err.message));
    }
  }
}
