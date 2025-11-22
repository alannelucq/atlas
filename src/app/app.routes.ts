import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home')
  },
  {
    path: 'edit-page',
    loadComponent: () => import('./features/edit-page/edit-page'),
  },
  {
    path: 'kanban',
    loadComponent: () => import('./features/kanban/kanban'),
  }
];
