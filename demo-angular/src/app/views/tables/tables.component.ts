import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tables',
  imports: [TranslateModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablesComponent {}
