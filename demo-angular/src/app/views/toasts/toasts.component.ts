import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-toasts',
  imports: [CommonModule, TranslateModule, CodeExampleComponent],
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

  // Success Toast with Icon
  successToastCode = `<div class="toast show fade toast-success" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-check-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Success</strong>
    </div>
    <div class="toast-body">
      Your action was completed successfully!
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;

  // Danger Toast with Icon
  dangerToastCode = `<div class="toast show fade toast-danger" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-exclamation-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Error</strong>
    </div>
    <div class="toast-body">
      There was an error processing your request.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;

  // Warning Toast with Icon
  warningToastCode = `<div class="toast show fade toast-warning" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-exclamation-triangle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Warning</strong>
    </div>
    <div class="toast-body">
      Please review your changes before proceeding.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;

  // Info Toast with Icon
  infoToastCode = `<div class="toast show fade toast-info" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-info-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Information</strong>
    </div>
    <div class="toast-body">
      Here's some helpful information for you.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;

  // Neutral Toast with Icon
  neutralToastCode = `<div class="toast show fade toast-neutral" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-info-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Neutral</strong>
    </div>
    <div class="toast-body">
      This is a neutral notification message.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;

  // Toast with Header, Body, and Footer
  fullToastCode = `<div class="toast-container">
  <div class="toast show fade toast-success" role="alert" aria-live="polite" aria-atomic="true">
    <div class="toast-icon">
      <i class="bi bi-check-circle toast-icon"></i>
    </div>
    <div class="toast-content">
      <div class="toast-header">
        <strong>Success</strong>
      </div>
      <div class="toast-body">
        Your action was completed successfully!
      </div>
      <div class="toast-footer">
        <button type="button" class="btn btn-subtle btn-sm">Action</button>
        <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
      </div>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`;

  // Dismissible Toast
  dismissibleToastCode = `<div class="toast show fade toast-success" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-check-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Success</strong>
    </div>
    <div class="toast-body">
      Your action was completed successfully!
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;

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