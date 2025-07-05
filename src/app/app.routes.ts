import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { refugeeGuard } from './core/guards/refugee-guard';
import { companyGuard } from './core/guards/company-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((m) => m.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register').then((m) => m.Register)
  },

  {
    path: 'refugee',
    canActivate: [authGuard, refugeeGuard],
    loadComponent: () =>
      import('./features/refugee/dashboard/dashboard').then((m) => m.Dashboard)
  },

  {
    path: 'company',
    canActivate: [authGuard, companyGuard],
    loadComponent: () =>
      import('./features/company/dashboard/dashboard').then((m) => m.Dashboard)
  }
];
