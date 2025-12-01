import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AlertsComponent } from '../alerts/alerts.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { CardsComponent } from '../cards/cards.component';
import { FormsComponent } from '../forms/forms.component';
import { TablesComponent } from '../tables/tables.component';

@Component({
  selector: 'app-bootstrap',
  imports: [
    TranslateModule,
    AlertsComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    TablesComponent
  ],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapComponent {}
