import { Component, signal, inject, effect } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly router = inject(Router);
  protected readonly translate = inject(TranslateService);
  
  protected readonly sidebarOpen = signal(true);
  protected readonly currentTheme = signal<string | null>(null);
  protected readonly currentLang = signal<'en' | 'ar'>('en');
  protected readonly isRTL = signal(false);

  constructor() {
    // Initialize translations
    this.translate.setFallbackLang('en');
    this.translate.use('en').subscribe();
  }

  protected readonly themes = [
    { id: 'default', name: 'Default', description: 'Standard SDGA theme', file: null },
    { id: 'dark', name: 'Dark', description: 'Modern dark color palette', file: 'dark.scss' },
    { id: 'material', name: 'Material', description: 'Material Design inspired', file: 'material.scss' },
    { id: 'rounded', name: 'Rounded', description: 'Soft and friendly', file: 'rounded.scss' },
    { id: 'minimal', name: 'Minimal', description: 'Clean and simple', file: 'minimal.scss' },
    { id: 'vibrant', name: 'Vibrant', description: 'Bold and colorful', file: 'vibrant.scss' },
    { id: 'large', name: 'Large', description: 'Big and prominent', file: 'large.scss' }
  ];

  protected readonly menuItems = [
    {
      groupKey: 'nav.getting_started',
      items: [
        { id: 'home', labelKey: 'nav.home', icon: '🏠', route: '/home' }
      ]
    },
    {
      groupKey: 'nav.layout',
      items: [
        { id: 'header', labelKey: 'nav.header', icon: '📋', route: '/header' },
        { id: 'footer', labelKey: 'nav.footer', icon: '📄', route: '/footer' }
      ]
    },
    {
      groupKey: 'nav.components',
      items: [
        { id: 'alerts', labelKey: 'nav.alerts', icon: '⚠️', route: '/alerts' },
        { id: 'buttons', labelKey: 'nav.buttons', icon: '🔘', route: '/buttons' },
        { id: 'cards', labelKey: 'nav.cards', icon: '🃏', route: '/cards' },
        { id: 'forms', labelKey: 'nav.forms', icon: '📝', route: '/forms' },
        { id: 'tables', labelKey: 'nav.tables', icon: '📊', route: '/tables' },
        { id: 'toasts', labelKey: 'nav.toasts', icon: '🔔', route: '/toasts' },
        { id: 'links', labelKey: 'nav.links', icon: '🔗', route: '/links' },
      ]
    }
  ];

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(open => !open);
  }

  toggleLanguage(): void {
    const newLang = this.currentLang() === 'en' ? 'ar' : 'en';
    this.currentLang.set(newLang);
    this.translate.use(newLang).subscribe(() => {
      this.isRTL.set(newLang === 'ar');
      document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', newLang);
    });
  }

  applyTheme(themeId: string): void {
    this.currentTheme.set(themeId === 'default' ? null : themeId);
    
    const theme = this.themes.find(t => t.id === themeId);
    if (theme?.file) {
      console.log(`To apply the ${theme.name} theme, import it in your styles.scss:`);
      console.log(`@import 'dist/SDGA/themes/${theme.file}';`);
    } else {
      console.log('Using default theme (no import needed)');
    }
  }
}
