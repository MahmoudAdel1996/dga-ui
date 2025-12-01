import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-example',
  imports: [CommonModule, TranslateModule],
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss'],
})
export class CodeExampleComponent {
  @Input() htmlCode?: string;
  @Input() tsCode?: string;
  @Input() scssCode?: string;
  @Input() title?: string;
  @Input() expanded = false;

  isExpanded = signal(false);
  activeTab = signal<'html' | 'ts' | 'scss'>('html');
  copySuccess = signal(false);

  ngOnInit() {
    this.isExpanded.set(this.expanded);
    // Set initial active tab to first available code
    if (this.htmlCode) this.activeTab.set('html');
    else if (this.tsCode) this.activeTab.set('ts');
    else if (this.scssCode) this.activeTab.set('scss');
  }

  toggleExpand() {
    this.isExpanded.update((value) => !value);
  }

  setActiveTab(tab: 'html' | 'ts' | 'scss') {
    this.activeTab.set(tab);
  }

  get currentCode(): string {
    const tab = this.activeTab();
    if (tab === 'html' && this.htmlCode) return this.htmlCode;
    if (tab === 'ts' && this.tsCode) return this.tsCode;
    if (tab === 'scss' && this.scssCode) return this.scssCode;
    return '';
  }

  get highlightedCode(): string {
    const code = this.currentCode;
    const tab = this.activeTab();
    let language = 'html';
    if (tab === 'ts') language = 'typescript';
    if (tab === 'scss') language = 'scss';

    try {
      return hljs.highlight(code, { language }).value;
    } catch {
      return code;
    }
  }

  get availableTabs(): Array<'html' | 'ts' | 'scss'> {
    const tabs: Array<'html' | 'ts' | 'scss'> = [];
    if (this.htmlCode) tabs.push('html');
    if (this.tsCode) tabs.push('ts');
    if (this.scssCode) tabs.push('scss');
    return tabs;
  }

  async copyCode() {
    try {
      await navigator.clipboard.writeText(this.currentCode);
      this.copySuccess.set(true);
      setTimeout(() => this.copySuccess.set(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }
}
