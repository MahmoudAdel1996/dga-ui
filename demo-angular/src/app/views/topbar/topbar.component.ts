import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-topbar',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  topbarCode = `<!-- Government Top Bar -->
<div class="topbar-container bg-secondary-subtle border-bottom">
  <div class="container py-1">
    <div class="d-flex justify-content-start align-items-center gap-2 small">
      <!-- Saudi flag emoji or SVG -->
      <span style="font-size: 1.25rem;" aria-hidden="true">🇸🇦</span>
      <span class="fw-bold">An official Saudi government website</span>
      <button
        class="btn btn-link btn-sm d-flex align-items-center gap-1 text-decoration-none p-0 ms-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topbarVerify"
        aria-expanded="false"
        aria-controls="topbarVerify">
        How to verify
        <i class="bi bi-chevron-down"></i>
      </button>
    </div>

    <div class="collapse" id="topbarVerify">
      <div class="row g-4 py-3">
        <div class="col-12 col-lg-6">
          <div class="d-flex gap-3 align-items-start">
            <div class="d-flex align-items-center justify-content-center rounded-circle border border-primary text-primary flex-shrink-0"
                 style="width: 48px; height: 48px;">
              <i class="bi bi-link-45deg fs-5"></i>
            </div>
            <div>
              <div class="fw-bold mb-1">Official links end with <strong>.gov.sa</strong></div>
              <div class="text-muted small">
                Look for a link that ends with <strong>.gov.sa</strong> before entering any personal information.
                Be careful about fake sites that look similar to official ones.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="d-flex gap-3 align-items-start">
            <div class="d-flex align-items-center justify-content-center rounded-circle border border-primary text-primary flex-shrink-0"
                 style="width: 48px; height: 48px;">
              <i class="bi bi-lock-fill fs-5"></i>
            </div>
            <div>
              <div class="fw-bold mb-1">Secure connections use <strong>HTTPS</strong></div>
              <div class="text-muted small">
                Look for <strong>https://</strong> at the start of the address and a padlock icon in your browser.
                These indicate a secure, encrypted connection.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DGA Registration Badge -->
      <div class="d-flex align-items-center gap-3 bg-white rounded shadow-sm py-2 px-4 mb-3 d-inline-flex">
        <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded fw-bold px-2 py-1" style="font-size: 0.7rem; letter-spacing: 0.5px;">DGA</div>
        <div class="small">This platform is registered with the Digital Government Authority</div>
        <a href="#" class="btn btn-link btn-sm p-0 text-decoration-none small d-flex align-items-center gap-1">
          <i class="bi bi-paperclip"></i> 20250414141
        </a>
      </div>
    </div>
  </div>
</div>`;

  topbarWithHeaderCode = `<!-- Complete Page Header = Top Bar + Main Header -->

<!-- Government Top Bar -->
<div class="topbar-container bg-secondary-subtle border-bottom">
  <div class="container py-1">
    <div class="d-flex align-items-center gap-2 small">
      <span style="font-size: 1.25rem;">🇸🇦</span>
      <span class="fw-bold">An official Saudi government website</span>
      <button class="btn btn-link btn-sm p-0 text-decoration-none d-flex align-items-center gap-1"
        type="button" data-bs-toggle="collapse" data-bs-target="#topbarVerify2">
        How to verify <i class="bi bi-chevron-down"></i>
      </button>
    </div>
    <div class="collapse" id="topbarVerify2">
      <!-- ... expand content ... -->
    </div>
  </div>
</div>

<!-- Main Header / Navbar -->
<nav class="navbar navbar-expand-lg bg-white shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold text-primary" href="#">SDGA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
      <div class="d-flex gap-2 align-items-center">
        <button class="btn btn-outline-primary btn-sm">Sign in</button>
        <button class="btn btn-primary btn-sm">Register</button>
      </div>
    </div>
  </div>
</nav>`;

  topbarRtlCode = `<!-- RTL Arabic Top Bar -->
<div class="topbar-container bg-secondary-subtle border-bottom" dir="rtl">
  <div class="container py-1">
    <div class="d-flex justify-content-start align-items-center gap-2 small">
      <span style="font-size: 1.25rem;" aria-hidden="true">🇸🇦</span>
      <span class="fw-bold">هذا الموقع رسمي حكومي سعودي</span>
      <button
        class="btn btn-link btn-sm d-flex align-items-center gap-1 text-decoration-none p-0 ms-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topbarVerifyAr"
        aria-expanded="false">
        كيف يمكنك التحقق؟
        <i class="bi bi-chevron-down"></i>
      </button>
    </div>
    <div class="collapse" id="topbarVerifyAr">
      <div class="row g-4 py-3">
        <div class="col-12 col-lg-6">
          <div class="d-flex gap-3 align-items-start">
            <div class="d-flex align-items-center justify-content-center rounded-circle border border-primary text-primary flex-shrink-0" style="width: 48px; height: 48px;">
              <i class="bi bi-link-45deg fs-5"></i>
            </div>
            <div>
              <div class="fw-bold mb-1">الروابط الرسمية تنتهي بـ <strong>.gov.sa</strong></div>
              <div class="text-muted small">تحقق من أن الرابط ينتهي بـ <strong>.gov.sa</strong> قبل إدخال أي معلومات شخصية.</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="d-flex gap-3 align-items-start">
            <div class="d-flex align-items-center justify-content-center rounded-circle border border-primary text-primary flex-shrink-0" style="width: 48px; height: 48px;">
              <i class="bi bi-lock-fill fs-5"></i>
            </div>
            <div>
              <div class="fw-bold mb-1">الاتصالات الآمنة تستخدم <strong>HTTPS</strong></div>
              <div class="text-muted small">ابحث عن <strong>https://</strong> في بداية العنوان وأيقونة القفل في متصفحك.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
