import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home')
  },
  {
    path: 'page/:id',
    loadComponent: () => import('./features/page-editor/page-editor'),
  },
  {
    path: 'kanban',
    loadComponent: () => import('./features/kanban/kanban'),
  }
];
