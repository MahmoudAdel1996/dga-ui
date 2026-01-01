import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

interface BreadcrumbItem {
  labelKey: string;
  url: string;
  icon?: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [TranslateModule, RouterModule, CodeExampleComponent],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumb {
  readonly breadcrumbs = signal<BreadcrumbItem[]>([
    { labelKey: 'breadcrumb.home', url: '/' },
    { labelKey: 'breadcrumb.library', url: '/library' },
    { labelKey: 'breadcrumb.data', url: '/library/data' },
  ]);

  readonly iconBreadcrumbs = signal<BreadcrumbItem[]>([
    { labelKey: 'breadcrumb.home', url: '/', icon: 'bi bi-house' },
    { labelKey: 'breadcrumb.projects', url: '/projects', icon: 'bi bi-kanban' },
    { labelKey: 'breadcrumb.design', url: '/projects/design', icon: 'bi bi-layers' },
    { labelKey: 'breadcrumb.components', url: '/projects/design/components', icon: 'bi bi-ui-checks-grid' },
  ]);

  readonly onPrimaryBreadcrumbs = signal<BreadcrumbItem[]>([
    { labelKey: 'breadcrumb.home', url: '/' },
    { labelKey: 'breadcrumb.library', url: '/library' },
    { labelKey: 'breadcrumb.data', url: '/library/data' },
    { labelKey: 'breadcrumb.details', url: '/library/data/details' },
  ]);

  readonly basicBreadcrumbHtml = `<nav aria-label="Breadcrumb">
  <ol class="dga-breadcrumb d-flex align-items-center gap-1">
    <li class="dga-breadcrumb-item"><a routerLink="/">Home</a></li>
    <div class="mirror-rtl d-flex align-items-center">
      <i class="bi bi-chevron-right breadcrumb-separator"></i>
    </div>
    <li class="dga-breadcrumb-item"><a routerLink="/library">Library</a></li>
    <div class="mirror-rtl d-flex align-items-center">
      <i class="bi bi-chevron-right breadcrumb-separator"></i>
    </div>
    <li class="dga-breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`;

  readonly breadcrumbTsCode = `import { signal } from '@angular/core';

readonly breadcrumbs = signal([
  { label: 'Home', url: '/' },
  { label: 'Library', url: '/library' },
  { label: 'Data', url: '/library/data' },
]);`;

  readonly iconBreadcrumbHtml = `<nav aria-label="Breadcrumb with icons">
  <ol class="dga-breadcrumb d-flex align-items-center gap-1">
    <li class="dga-breadcrumb-item">
      <a routerLink="/">
        <i class="breadcrumb-icon bi bi-house"></i>
        Home
      </a>
    </li>
    <div class="mirror-rtl d-flex align-items-center">
      <i class="bi bi-chevron-right breadcrumb-separator"></i>
    </div>
    <li class="dga-breadcrumb-item">
      <a routerLink="/projects">
        <i class="breadcrumb-icon bi bi-kanban"></i>
        Projects
      </a>
    </li>
    <div class="mirror-rtl d-flex align-items-center">
      <i class="bi bi-chevron-right breadcrumb-separator"></i>
    </div>
    <li class="dga-breadcrumb-item">
      <a routerLink="/projects/design">
        <i class="breadcrumb-icon bi bi-layers"></i>
        Design System
      </a>
    </li>
    <div class="mirror-rtl d-flex align-items-center">
      <i class="bi bi-chevron-right breadcrumb-separator"></i>
    </div>
    <li class="dga-breadcrumb-item active" aria-current="page">
      <i class="breadcrumb-icon bi bi-ui-checks-grid"></i>
      Components
    </li>
  </ol>
</nav>`;

  readonly onColorBreadcrumbHtml = `<div class="on-primary p-3 rounded-3">
  <nav aria-label="Breadcrumb on primary">
    <ol class="dga-breadcrumb d-flex align-items-center gap-1">
      <li class="dga-breadcrumb-item"><a routerLink="/">Home</a></li>
      <div class="mirror-rtl d-flex align-items-center">
        <i class="bi bi-chevron-right breadcrumb-separator"></i>
      </div>
      <li class="dga-breadcrumb-item"><a routerLink="/library">Library</a></li>
      <div class="mirror-rtl d-flex align-items-center">
        <i class="bi bi-chevron-right breadcrumb-separator"></i>
      </div>
      <li class="dga-breadcrumb-item"><a routerLink="/library/data">Data</a></li>
      <div class="mirror-rtl d-flex align-items-center">
        <i class="bi bi-chevron-right breadcrumb-separator"></i>
      </div>
      <li class="dga-breadcrumb-item active" aria-current="page">Details</li>
    </ol>
  </nav>
</div>`;

  readonly hgiSeparatorHtml = `<div class="optional-separator">
  <!-- Optional branded separator using HGI icon set -->
  <i class="hgi-stroke hgi-rounded hgi-arrow-right-01 breadcrumb-separator"></i>
</div>`;
}
