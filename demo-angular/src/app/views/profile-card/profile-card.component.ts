import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-profile-card',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCardComponent {
  basicProfileCode = `<div class="card h-100">
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between gap-3">
      <div class="d-flex gap-3 justify-content-start align-items-center">
        <span class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold"
              style="width: 48px; height: 48px; font-size: 1.25rem; flex-shrink: 0;">A</span>
        <h5 class="mb-0">Ahmed Al-Rashidi</h5>
      </div>
      <a href="/profile" class="btn btn-outline-primary btn-sm btn-icon" title="Edit Profile">
        <i class="bi bi-pencil"></i>
      </a>
    </div>
  </div>
</div>`;

  detailedProfileCode = `<div class="card">
  <div class="card-body">
    <div class="d-flex align-items-start gap-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold flex-shrink-0"
           style="width: 64px; height: 64px; font-size: 1.5rem;">A</div>
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h5 class="mb-1">Ahmed Al-Rashidi</h5>
            <p class="text-muted small mb-1"><i class="bi bi-envelope me-1"></i>ahmed@example.sa</p>
            <p class="text-muted small mb-0"><i class="bi bi-telephone me-1"></i>+966 50 123 4567</p>
          </div>
          <a href="#" class="btn btn-outline-primary btn-sm">Edit</a>
        </div>
        <hr />
        <div class="row g-2">
          <div class="col-6">
            <small class="text-muted">National ID</small>
            <div class="small fw-semibold">1029384756</div>
          </div>
          <div class="col-6">
            <small class="text-muted">Role</small>
            <div class="small fw-semibold">License Manager</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  avatarVariationsCode = `<!-- Initials avatar -->
<div class="card" style="width: 200px;">
  <div class="card-body text-center">
    <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold mx-auto mb-2"
         style="width: 56px; height: 56px; font-size: 1.25rem;">A</div>
    <div class="fw-semibold">Ahmed</div>
    <div class="small text-muted">Admin</div>
  </div>
</div>

<!-- Icon avatar -->
<div class="card" style="width: 200px;">
  <div class="card-body text-center">
    <div class="d-flex align-items-center justify-content-center rounded-circle bg-secondary-subtle text-secondary mx-auto mb-2"
         style="width: 56px; height: 56px; font-size: 1.5rem;">
      <i class="bi bi-person-fill"></i>
    </div>
    <div class="fw-semibold">Anonymous</div>
    <div class="small text-muted">Guest</div>
  </div>
</div>`;

  profileWithStatsCode = `<div class="card">
  <div class="card-body">
    <div class="d-flex align-items-center gap-3 mb-4">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold flex-shrink-0"
           style="width: 56px; height: 56px; font-size: 1.25rem;">A</div>
      <div>
        <h5 class="mb-0">Ahmed Al-Rashidi</h5>
        <p class="text-muted small mb-0">License Manager · Al-Rashidi Trading Co.</p>
      </div>
    </div>
    <div class="row g-2 text-center">
      <div class="col-4">
        <div class="bg-primary-50 rounded p-2">
          <div class="fs-5 fw-bold text-primary">12</div>
          <div class="small text-muted">Applications</div>
        </div>
      </div>
      <div class="col-4">
        <div class="bg-success-50 rounded p-2">
          <div class="fs-5 fw-bold text-success">5</div>
          <div class="small text-muted">Active Licenses</div>
        </div>
      </div>
      <div class="col-4">
        <div class="bg-warning-50 rounded p-2">
          <div class="fs-5 fw-bold text-warning">2</div>
          <div class="small text-muted">Pending</div>
        </div>
      </div>
    </div>
  </div>
  <div class="card-footer d-flex gap-2">
    <button class="btn btn-primary btn-sm"><i class="bi bi-plus me-1"></i>New Application</button>
    <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-eye me-1"></i>View All</button>
  </div>
</div>`;

  profileVerificationCode = `<!-- Verified -->
<div class="card">
  <div class="card-body">
    <div class="d-flex align-items-center gap-3 mb-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold flex-shrink-0"
           style="width: 52px; height: 52px;">A</div>
      <div>
        <div class="d-flex align-items-center gap-2">
          <h6 class="mb-0">Ahmed Al-Rashidi</h6>
          <i class="bi bi-patch-check-fill text-success"></i>
        </div>
        <p class="text-muted small mb-0">National ID: 1029384756</p>
      </div>
    </div>
    <div class="d-flex align-items-center gap-2 p-2 rounded bg-success-50">
      <i class="bi bi-shield-check text-success"></i>
      <span class="small text-success fw-medium">Identity Verified via Nafath</span>
    </div>
  </div>
</div>

<!-- Unverified -->
<div class="card">
  <div class="card-body">
    <div class="d-flex align-items-center gap-3 mb-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-secondary-subtle text-secondary fw-bold flex-shrink-0"
           style="width: 52px; height: 52px;">
        <i class="bi bi-person-fill"></i>
      </div>
      <div>
        <div class="d-flex align-items-center gap-2">
          <h6 class="mb-0">Guest User</h6>
          <i class="bi bi-exclamation-circle-fill text-warning"></i>
        </div>
        <p class="text-muted small mb-0">Identity not verified</p>
      </div>
    </div>
    <div class="d-flex align-items-center gap-2 p-2 rounded bg-warning-50">
      <i class="bi bi-shield-exclamation text-warning"></i>
      <span class="small text-warning fw-medium">Verification required to proceed</span>
    </div>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm w-100">Verify with Nafath</button>
  </div>
</div>`;

  compactProfileListCode = `<div class="card">
  <div class="card-header">
    <h6 class="mb-0">Team Members</h6>
  </div>
  <div class="card-body p-0">
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex align-items-center gap-3 py-3">
        <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold flex-shrink-0"
             style="width: 40px; height: 40px;">A</div>
        <div class="flex-grow-1">
          <div class="fw-semibold small">Ahmed Al-Rashidi</div>
          <div class="text-muted" style="font-size: 0.75rem;">License Manager</div>
        </div>
        <span class="badge text-bg-success">Active</span>
      </li>
      <li class="list-group-item d-flex align-items-center gap-3 py-3">
        <div class="d-flex align-items-center justify-content-center rounded-circle bg-secondary-subtle text-secondary fw-bold flex-shrink-0"
             style="width: 40px; height: 40px;"><i class="bi bi-person-fill"></i></div>
        <div class="flex-grow-1">
          <div class="fw-semibold small">Fatima Al-Qahtani</div>
          <div class="text-muted" style="font-size: 0.75rem;">Auditor</div>
        </div>
        <span class="badge text-bg-danger">Inactive</span>
      </li>
    </ul>
  </div>
</div>`;
}
