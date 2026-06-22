import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-service-card',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  selectableCardCode = `<!-- Default -->
<div class="card card-selectable p-3" tabindex="0">
  <div class="d-flex justify-content-between align-items-start mb-3">
    <div class="card-selectable-icon">
      <i class="bi bi-check-circle"></i>
    </div>
    <input class="form-check-input mt-0" type="checkbox">
  </div>
  <h6 class="card-title fw-semibold">Card Title</h6>
  <p class="card-text text-muted small mb-0">Card content placeholder text goes here</p>
</div>

<!-- Disabled -->
<div class="card card-selectable disabled p-3" aria-disabled="true">
  <div class="d-flex justify-content-between align-items-start mb-3">
    <div class="card-selectable-icon">
      <i class="bi bi-check-circle"></i>
    </div>
    <input class="form-check-input mt-0" type="checkbox" disabled>
  </div>
  <h6 class="card-title fw-semibold">Card Title</h6>
  <p class="card-text text-muted small mb-0">Card content placeholder text goes here</p>
</div>`;

  serviceCardCode = `<div class="card service-card h-100 border">
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary mb-3"
         style="width: 52px; height: 52px;">
      <i class="bi bi-clock fs-4"></i>
    </div>
    <h6 class="card-subtitle mb-2 fw-semibold">Book Appointment</h6>
    <p class="text-muted small mb-0">Schedule an inspection appointment at your preferred date and location.</p>
  </div>
  <div class="card-footer border-top-0 bg-transparent p-3 pt-0">
    <a href="#" class="btn btn-primary btn-sm btn-icon">
      <i class="bi bi-arrow-right"></i>
    </a>
  </div>
</div>`;

  favoriteServicesCode = `<div class="card">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="mb-0 d-flex align-items-center gap-2">
      <i class="bi bi-star-fill text-warning"></i> Favorite Services
    </h5>
    <button class="btn btn-link btn-sm p-0 text-decoration-none">Manage</button>
  </div>
  <div class="card-body">
    <div class="row g-3">
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 border text-center p-3">
          <i class="bi bi-award fs-2 text-primary mb-2"></i>
          <div class="small fw-semibold">Certification</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 border text-center p-3">
          <i class="bi bi-search fs-2 text-primary mb-2"></i>
          <div class="small fw-semibold">Inspection</div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 border text-center p-3">
          <i class="bi bi-file-text fs-2 text-primary mb-2"></i>
          <div class="small fw-semibold">Licensing</div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  accountManagerCode = `<div class="card">
  <div class="card-body">
    <h6 class="card-title mb-3 d-flex align-items-center gap-2">
      <i class="bi bi-person-badge text-primary"></i> Your Account Manager
    </h6>
    <div class="d-flex align-items-center gap-3">
      <div class="d-flex align-items-center justify-content-center rounded-circle bg-secondary text-white fw-bold flex-shrink-0"
           style="width: 52px; height: 52px; font-size: 1.25rem;">S</div>
      <div>
        <div class="fw-semibold">Sara Al-Mutairi</div>
        <div class="text-muted small"><i class="bi bi-envelope me-1"></i>sara.mutairi@sdga.gov.sa</div>
        <div class="text-muted small"><i class="bi bi-telephone me-1"></i>+966 11 987 6543</div>
      </div>
    </div>
    <div class="mt-3 d-flex gap-2">
      <a href="mailto:sara.mutairi@sdga.gov.sa" class="btn btn-outline-primary btn-sm btn-icon">
        <i class="bi bi-envelope"></i> Email
      </a>
      <a href="tel:+96611987654" class="btn btn-outline-secondary btn-sm btn-icon">
        <i class="bi bi-telephone"></i> Call
      </a>
    </div>
  </div>
</div>`;
}
