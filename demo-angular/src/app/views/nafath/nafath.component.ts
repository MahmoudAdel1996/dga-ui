import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-nafath',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './nafath.component.html',
  styleUrl: './nafath.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NafathComponent {
  nafathIdleCode = `<!-- Idle state: national ID input -->
<div class="card border shadow-none" style="max-width: 340px;">
  <div class="card-body">
    <div class="d-flex flex-column align-items-center gap-1 mb-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary"
           style="width: 64px; height: 64px;">
        <i class="bi bi-shield-lock fs-3"></i>
      </div>
      <h6 class="mt-2 mb-1">Nafath Verification</h6>
    </div>
    <div class="d-flex flex-column gap-3">
      <div class="form-group">
        <label for="nationalIdInput" class="form-label">National ID <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="nationalIdInput" placeholder="Enter 10-digit National ID" maxlength="10" />
      </div>
      <div class="d-grid">
        <button type="button" class="btn btn-dark">Authenticate</button>
      </div>
    </div>
  </div>
</div>`;

  nafathWaitingCode = `<!-- Waiting state: OTP display with countdown -->
<div class="card border shadow-none" style="max-width: 340px;">
  <div class="card-body">
    <div class="d-flex flex-column align-items-center gap-1 mb-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle" style="width: 64px; height: 64px;">
        <div class="spinner-border text-primary" role="status" style="width: 2rem; height: 2rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <h6 class="mt-2 mb-1">Nafath Verification</h6>
    </div>
    <div class="form-group mb-3">
      <label class="form-label">National ID</label>
      <input type="text" class="form-control is-valid" value="1029384756" readonly />
    </div>
    <div class="d-flex flex-column align-items-center justify-content-center gap-3 my-3">
      <div class="badge bg-primary rounded-circle d-flex justify-content-center align-items-center fw-bold"
           style="width: 72px; height: 72px; font-size: 2rem;">42</div>
      <div class="text-muted small fw-bold">
        <i class="bi bi-clock me-1"></i> 01:30
      </div>
    </div>
    <p class="text-center text-muted small">Open the Nafath app and enter this number to verify your identity.</p>
  </div>
</div>`;

  nafathSuccessCode = `<!-- Success state -->
<div class="card border shadow-none" style="max-width: 340px;">
  <div class="card-body">
    <div class="d-flex flex-column align-items-center gap-1 mb-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success" style="width: 64px; height: 64px;">
        <i class="bi bi-shield-fill-check fs-3"></i>
      </div>
      <h6 class="mt-2 mb-1">Identity Verified</h6>
    </div>
    <div class="form-group mb-3">
      <label class="form-label">National ID</label>
      <input type="text" class="form-control is-valid" value="1029384756" readonly />
    </div>
    <div class="alert alert-success d-flex align-items-center gap-2 py-2">
      <i class="bi bi-check-circle-fill"></i>
      <span class="small">Your identity has been successfully verified via Nafath.</span>
    </div>
  </div>
</div>`;

  nafathFailedCode = `<!-- Failed state -->
<div class="card border shadow-none" style="max-width: 340px;">
  <div class="card-body">
    <div class="d-flex flex-column align-items-center gap-1 mb-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-danger-subtle text-danger" style="width: 64px; height: 64px;">
        <i class="bi bi-shield-fill-x fs-3"></i>
      </div>
      <h6 class="mt-2 mb-1">Verification Failed</h6>
    </div>
    <div class="form-group mb-3">
      <label class="form-label">National ID</label>
      <input type="text" class="form-control is-invalid" value="1029384756" readonly />
    </div>
    <div class="alert alert-danger d-flex align-items-center gap-2 py-2 mb-3">
      <i class="bi bi-shield-fill-x"></i>
      <span class="small">Verification failed. Please try again.</span>
    </div>
    <div class="d-grid">
      <button type="button" class="btn btn-outline-dark">
        <i class="bi bi-arrow-clockwise me-2"></i> Retry
      </button>
    </div>
  </div>
</div>`;
}
