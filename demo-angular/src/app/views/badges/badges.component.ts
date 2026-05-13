import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-badges',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent {
  badgeVariantsCode = `<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>`;

  badgeCounterCode = `<button type="button" class="btn btn-primary">
  Inbox <span class="badge badge-light ms-2">12</span>
</button>

<button type="button" class="btn btn-secondary">
  Notifications <span class="badge badge-dark ms-2">5</span>
</button>`;
}