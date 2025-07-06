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
    path: 'create-vacancy',
    loadComponent: () => import('./features/company/create-vacancy/create-vacancy').then(m => m.CreateVacancy),
    canActivate: [companyGuard],
  },

  {
    path: 'vacancies',
    loadComponent: () => import('./features/vacancies/vacancies').then(m => m.Vacancies),
    canActivate: [authGuard],  // Só usuários logados podem ver
  },

  {
    path: 'refugee',
    canActivate: [authGuard, refugeeGuard],
    loadComponent: () =>
      import('./features/refugee/dashboard/dashboard').then((m) => m.Dashboard)
  },

  {
    path: 'company',
    loadComponent: () =>
      import('./features/company/dashboard/dashboard').then((m) => m.Dashboard)
  },

  {
    path: 'entrepreneurship',
    loadComponent: () => import('./features/entrepreneurship/entrepreneurship').then(m => m.Entrepreneurship),
  },
];
