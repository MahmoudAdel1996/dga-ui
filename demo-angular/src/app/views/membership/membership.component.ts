import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-membership',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembershipComponent {
  membershipCardCode = `<div class="card overflow-hidden rounded-4 h-100 position-relative" style="background: linear-gradient(135deg, #1a3c6b 0%, #0d6efd 100%);">
  <div class="card-body p-3 d-flex flex-column justify-content-between text-white" style="min-height: 180px;">
    <div class="d-flex align-items-start justify-content-between mb-2">
      <div class="fw-bold fs-5">SDGA</div>
      <span class="badge bg-warning text-dark px-2 py-1 rounded-2 d-flex align-items-center gap-1">
        <i class="bi bi-award-fill"></i> Gold
      </span>
    </div>
    <div>
      <div class="small opacity-75 mb-1">Member</div>
      <div class="fw-semibold">Saudi Standards Authority</div>
      <div class="small opacity-75">Ahmed Al-Rashidi</div>
      <div class="small opacity-75 mt-1">Membership No: SASO-2024-001234</div>
    </div>
    <div class="d-flex gap-3 mt-2 small">
      <div>
        <div class="opacity-75" style="font-size: 0.7rem;">JOIN DATE</div>
        <div class="fw-semibold">15 Jan 2023</div>
      </div>
      <div class="border-start border-white border-opacity-50"></div>
      <div>
        <div class="opacity-75" style="font-size: 0.7rem;">RENEWAL DATE</div>
        <div class="fw-semibold">14 Jan 2025</div>
      </div>
    </div>
  </div>
</div>`;

  planItemCode = `<div class="card border h-100 cursor-pointer">
  <div class="card-body text-center p-4">
    <div class="mb-3">
      <i class="bi bi-award fs-1 text-warning"></i>
    </div>
    <h5 class="card-title">Gold</h5>
    <div class="display-6 fw-bold text-primary mb-1">5,000 <small class="fs-6 fw-normal text-muted">SAR/yr</small></div>
    <hr />
    <ul class="list-unstyled text-start small">
      <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Up to 10 service requests</li>
      <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Priority inspection slots</li>
      <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Dedicated account manager</li>
      <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Certificate fast-track</li>
      <li class="text-muted"><i class="bi bi-x-circle me-2"></i>Multi-branch support</li>
    </ul>
    <button type="button" class="btn btn-primary w-100 mt-2">Select Plan</button>
  </div>
</div>`;

  subscriptionInfoCode = `<div class="card border">
  <div class="card-header fw-semibold">Current Subscription</div>
  <div class="card-body">
    <div class="row g-3">
      <div class="col-6 col-md-3">
        <div class="small text-muted">Plan</div>
        <div class="fw-semibold">Gold</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="small text-muted">Status</div>
        <span class="badge text-bg-success">Active</span>
      </div>
      <div class="col-6 col-md-3">
        <div class="small text-muted">Start Date</div>
        <div class="fw-semibold">15 Jan 2024</div>
      </div>
      <div class="col-6 col-md-3">
        <div class="small text-muted">Renewal Date</div>
        <div class="fw-semibold">14 Jan 2025</div>
      </div>
    </div>
  </div>
  <div class="card-footer d-flex gap-2">
    <button type="button" class="btn btn-primary btn-sm">Renew</button>
    <button type="button" class="btn btn-secondary btn-sm">Upgrade</button>
    <button type="button" class="btn btn-destructive-secondary btn-sm ms-auto">Cancel</button>
  </div>
</div>`;
}
