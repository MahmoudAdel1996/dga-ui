import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toasts',
  imports: [CommonModule, TranslateModule],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastsComponent {
  protected readonly showToast1 = signal(false);
  protected readonly showToast2 = signal(false);
  protected readonly showToast3 = signal(false);
  protected readonly showToast4 = signal(false);
  protected readonly showToast5 = signal(false);
  protected readonly showToast6 = signal(false);

  hideToast(number: number): void {
    switch(number) {
      case 1: this.showToast1.set(false); break;
      case 2: this.showToast2.set(false); break;
      case 3: this.showToast3.set(false); break;
      case 4: this.showToast4.set(false); break;
      case 5: this.showToast5.set(false); break;
      case 6: this.showToast6.set(false); break;
    }
  }

  showAllToasts(): void {
    this.showToast1.set(true);
    this.showToast2.set(true);
    this.showToast3.set(true);
    this.showToast4.set(true);
    this.showToast5.set(true);
    this.showToast6.set(true);
  }
}