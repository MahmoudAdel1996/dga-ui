import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-buttons',
  imports: [TranslateModule],
  templateUrl: './contexts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextsComponent {}