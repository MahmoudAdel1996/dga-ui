import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-links',
  imports: [CommonModule, TranslateModule, CodeExampleComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
  // Basic link colors
  basicLinksCode = `<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-info">Info link</a>`;

  // Underline utilities with opacity variants
  underlineLinksCode = `<!-- Default underline -->
<a href="#" class="link-underline">Link with underline</a>

<!-- Opacity variants -->
<a href="#" class="link-underline-opacity-0">No underline (opacity 0)</a>
<a href="#" class="link-underline-opacity-25">25% underline opacity</a>
<a href="#" class="link-underline-opacity-50">50% underline opacity</a>
<a href="#" class="link-underline-opacity-75">75% underline opacity</a>
<a href="#" class="link-underline-opacity-100">100% underline opacity</a>`;

  // Hover underline effects
  hoverLinksCode = `<!-- Show underline on hover -->
<a href="#" class="link-primary link-underline-opacity-0 link-underline-opacity-100-hover">
  Underline appears on hover
</a>

<!-- Hide underline on hover -->
<a href="#" class="link-secondary link-underline-opacity-100 link-underline-opacity-0-hover">
  Underline disappears on hover
</a>`;

  // Underline offset utilities
  offsetLinksCode = `<a href="#" class="link-offset-1">Link with offset 1</a>
<a href="#" class="link-offset-2">Link with offset 2</a>
<a href="#" class="link-offset-3">Link with offset 3</a>`;

  // Combined offset and hover
  offsetHoverCode = `<a href="#" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
  Link with offset that changes on hover
</a>`;

  // Links with icons
  iconLinksCode = `<!-- Icon before text -->
<a href="#" class="link-primary">
  <i class="hgi hgi-stroke hgi-link-01 me-2"></i>
  Link with leading icon
</a>

<!-- Icon after text -->
<a href="#" class="link-secondary">
  External link
  <i class="hgi hgi-stroke hgi-link-external-01 ms-2"></i>
</a>

<!-- Icon with arrow -->
<a href="#" class="link-success">
  <i class="hgi hgi-stroke hgi-arrow-right-01 me-2"></i>
  Arrow link
</a>`;

  // Custom link styles - subtle
  subtleLinkCode = `<a href="#" class="custom-link-subtle">Subtle link style</a>`;

  subtleLinkScss = `.custom-link-subtle {
  color: var(--dga-neutral-600);
  text-decoration: none;
  
  &:hover {
    color: var(--dga-primary);
    text-decoration: underline;
  }
}`;

  // Custom link styles - bold
  boldLinkCode = `<a href="#" class="custom-link-bold">Bold link style</a>`;

  boldLinkScss = `.custom-link-bold {
  color: var(--dga-primary);
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    color: var(--dga-primary-dark);
    text-decoration: underline;
  }
}`;

  // Custom link styles - decorated
  decoratedLinkCode = `<a href="#" class="custom-link-decorated">Decorated link with animated underline</a>`;

  decoratedLinkScss = `.custom-link-decorated {
  color: var(--dga-secondary);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--dga-secondary);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}`;
}
