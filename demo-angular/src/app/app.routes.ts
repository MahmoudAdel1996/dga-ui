import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./views/alerts/alerts.component').then(m => m.AlertsComponent)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./views/buttons/buttons.component').then(m => m.ButtonsComponent)
  },
  {
    path: 'cards',
    loadComponent: () => import('./views/cards/cards.component').then(m => m.CardsComponent)
  },
  {
    path: 'forms',
    loadComponent: () => import('./views/forms/forms.component').then(m => m.FormsComponent)
  },
  {
    path: 'tables',
    loadComponent: () => import('./views/tables/tables.component').then(m => m.TablesComponent)
  },
  {
    path: 'toasts',
    loadComponent: () => import('./views/toasts/toasts.component').then(m => m.ToastsComponent)
  },
  {
    path: 'bootstrap',
    loadComponent: () => import('./views/bootstrap/bootstrap.component').then(m => m.BootstrapComponent)
  },
  {
    path: 'links',
    loadComponent: () => import('./views/links/links.component').then(m => m.LinksComponent)
  }
];
