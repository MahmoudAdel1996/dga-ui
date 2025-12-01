import { Component, ChangeDetectionStrategy, AfterViewInit, inject, PLATFORM_ID, viewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forms',
  imports: [TranslateModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      queueMicrotask(() => {
        document.querySelectorAll('[type="checkbox"]').forEach((checkbox: any) => {
            if (checkbox.id.includes('Indeterminate')) {
              checkbox.indeterminate = true
              console.log(checkbox)
            }
          })
      });
    }
  }
}
