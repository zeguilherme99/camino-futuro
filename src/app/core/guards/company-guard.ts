import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const companyGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated && auth.role === 'company') {
    return true;
  } else {
    alert('Acesso restrito a empresas!');
    return router.createUrlTree(['/']);
  }
};
