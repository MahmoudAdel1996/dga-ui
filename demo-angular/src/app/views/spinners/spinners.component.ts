import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-spinners',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './spinners.component.html',
  styleUrl: './spinners.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnersComponent {
  spinnerBorderCode = `<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  spinnerGrowCode = `<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  spinnerSizesCode = `<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-border spinner-border-xxs text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xxs</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-border spinner-border-xs text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xs</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-border spinner-border-s text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">s</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-border spinner-border-m text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">m</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-border spinner-border-l text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">l</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-border spinner-border-xl text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xl</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-border spinner-border-xxl text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xxl</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-grow spinner-grow-xxs text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xxs</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-grow spinner-grow-xs text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xs</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-grow spinner-grow-s text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">s</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-grow spinner-grow-m text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">m</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-grow spinner-grow-l text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">l</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-grow spinner-grow-xl text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xl</small>
</div>
<div class="d-flex flex-column align-items-center gap-1">
  <div class="spinner-grow spinner-grow-xxl text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <small class="text-muted">xxl</small>
</div>`;

  spinnerButtonsCode = `<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Loading...
</button>

<button class="btn btn-secondary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
  Processing...
</button>`;
}
