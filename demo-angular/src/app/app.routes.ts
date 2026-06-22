import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./views/home/home.component').then((m) => m.HomeComponent),
  },
  // ── Bootstrap Layout ──────────────────────────────────────────────────────
  {
    path: 'topbar',
    loadComponent: () => import('./views/topbar/topbar.component').then((m) => m.TopbarComponent),
  },
  {
    path: 'header',
    loadComponent: () => import('./views/header/header').then((m) => m.Header),
  },
  {
    path: 'footer',
    loadComponent: () => import('./views/footer/footer').then((m) => m.Footer),
  },
  {
    path: 'navbar',
    loadComponent: () => import('./views/navbar/navbar.component').then((m) => m.NavbarComponent),
  },
  // ── Bootstrap Components ──────────────────────────────────────────────────
  {
    path: 'alerts',
    loadComponent: () => import('./views/alerts/alerts.component').then((m) => m.AlertsComponent),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./views/accordion/accordion.component').then((m) => m.AccordionComponent),
  },
  {
    path: 'badges',
    loadComponent: () => import('./views/badges/badges.component').then((m) => m.BadgesComponent),
  },
  {
    path: 'breadcrumb',
    loadComponent: () => import('./views/breadcrumb/breadcrumb').then(m => m.Breadcrumb),
  },
  {
    path: 'buttons',
    loadComponent: () => import('./views/buttons/buttons.component').then((m) => m.ButtonsComponent),
  },
  {
    path: 'cards',
    loadComponent: () => import('./views/cards/cards.component').then((m) => m.CardsComponent),
  },
  {
    path: 'carousel',
    loadComponent: () => import('./views/carousel/carousel.component').then((m) => m.CarouselComponent),
  },
  {
    path: 'collapse',
    loadComponent: () => import('./views/collapse/collapse.component').then((m) => m.CollapseComponent),
  },
  {
    path: 'dropdown',
    loadComponent: () => import('./views/dropdown/dropdown.component').then((m) => m.DropdownComponent),
  },
  {
    path: 'forms',
    loadComponent: () => import('./views/forms/forms.component').then((m) => m.FormsComponent),
  },
  {
    path: 'links',
    loadComponent: () => import('./views/links/links.component').then((m) => m.LinksComponent),
  },
  {
    path: 'list-group',
    loadComponent: () => import('./views/list-group/list-group.component').then((m) => m.ListGroupComponent),
  },
  {
    path: 'modal',
    loadComponent: () => import('./views/modal/modal.component').then((m) => m.ModalComponent),
  },
  {
    path: 'pagination',
    loadComponent: () => import('./views/pagination/pagination.component').then((m) => m.PaginationComponent),
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('./views/progress-bar/progress-bar.component').then((m) => m.ProgressBarComponent),
  },
  {
    path: 'progress-indicator',
    loadComponent: () => import('./views/progress-indicator/progress-indicator').then(m => m.ProgressIndicator),
  },
  {
    path: 'spinners',
    loadComponent: () => import('./views/spinners/spinners.component').then((m) => m.SpinnersComponent),
  },
  {
    path: 'tables',
    loadComponent: () => import('./views/tables/tables.component').then((m) => m.TablesComponent),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./views/tabs/tabs.component').then(m => m.TabsComponent),
  },
  {
    path: 'toasts',
    loadComponent: () => import('./views/toasts/toasts.component').then((m) => m.ToastsComponent),
  },
  {
    path: 'tooltips',
    loadComponent: () => import('./views/tooltips/tooltips.component').then((m) => m.TooltipsComponent),
  },
  // ── Custom App Components ────────────────────────────────────────────────
  {
    path: 'attachment',
    loadComponent: () => import('./views/attachment/attachment.component').then((m) => m.AttachmentComponent),
  },
  {
    path: 'dialog',
    loadComponent: () => import('./views/dialog/dialog.component').then((m) => m.DialogComponent),
  },
  {
    path: 'invoices',
    loadComponent: () => import('./views/invoices/invoices.component').then((m) => m.InvoicesComponent),
  },
  {
    path: 'membership',
    loadComponent: () => import('./views/membership/membership.component').then((m) => m.MembershipComponent),
  },
  {
    path: 'nafath',
    loadComponent: () => import('./views/nafath/nafath.component').then((m) => m.NafathComponent),
  },
  {
    path: 'notifications',
    loadComponent: () => import('./views/notifications/notifications.component').then((m) => m.NotificationsComponent),
  },
  {
    path: 'profile-card',
    loadComponent: () => import('./views/profile-card/profile-card.component').then((m) => m.ProfileCardComponent),
  },
  {
    path: 'service-card',
    loadComponent: () => import('./views/service-card/service-card.component').then((m) => m.ServiceCardComponent),
  },
];
