import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home.component'),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings.component'),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
