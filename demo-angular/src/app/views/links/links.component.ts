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
  // Basic link variants (primary, neutral, on-color, disabled)
  basicLinksCode = `<a href=\"javascript:void(0);\" class=\"link-primary link-offset-2\">Primary link</a>
<a href=\"javascript:void(0);\" class=\"link-neutral link-offset-2\">Neutral link</a>
<div class=\"p-3 bg-primary rounded-2\"><a href=\"javascript:void(0);\" class=\"link-primary link-offset-2\">On-color link</a></div>
<a href=\"javascript:void(0);\" class=\"link-primary disabled link-offset-2\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>`;

}
