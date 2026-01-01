import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-progress-indicator',
  imports: [TranslatePipe],
  templateUrl: './progress-indicator.html',
  styleUrl: './progress-indicator.scss',
})
export class ProgressIndicator {

}
