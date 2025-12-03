import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink, RouterLinkActive, NgbCollapse],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isNavbarCollapsed = true;
  
  routeLinks = [
    { 
      textKey: 'Home', 
      route: () => '/', 
      isExternal: false,
      routerLinkActiveOptions: { exact: true }
    }
  ];

  languageSwitchText = signal('العربية');
  
  auth = {
    isAuthenticatedUser: () => false,
    userName: () => ({ nameAr: '', nameEn: '' })
  };
  
  localize = {
    isArabic: () => false
  };

  getRouteWithCutlure(route: () => string): string {
    return route();
  }

  switchLanguage(event: Event): void {
    event.preventDefault();
    // Toggle language logic here
  }

  onLoginClick(event: Event): void {
    event.preventDefault();
    // Login logic here
  }

  onLogoutClick(event: Event): void {
    event.preventDefault();
    // Logout logic here
  }
}
