import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-invoices',
  imports: [TranslateModule, CodeExampleComponent, DecimalPipe],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesComponent {
  // Static sample data
  readonly invoiceHeader = {
    invoiceNumber: 'INV-2024-009876',
    invoiceDate: '2024-06-10',
    printingDate: '2024-06-15',
  };

  readonly invoiceBody = {
    lines: [
      { keyEn: 'Client Name', keyAr: 'اسم العميل', value: 'Saudi Standards Authority' },
      { keyEn: 'Commercial Registration', keyAr: 'السجل التجاري', value: '1010123456' },
      { keyEn: 'Application No.', keyAr: 'رقم الطلب', value: 'APP-2024-5566' },
      { keyEn: 'Service Type', keyAr: 'نوع الخدمة', value: 'Product Certification' },
      { keyEn: 'Payment Method', keyAr: 'طريقة الدفع', value: 'SADAD' },
      { keyEn: 'Status', keyAr: 'الحالة', value: 'Paid' },
    ],
    totals: [
      { keyEn: 'Subtotal', keyAr: 'المجموع الفرعي', value: 5000 },
      { keyEn: 'VAT (15%)', keyAr: 'ضريبة القيمة المضافة (15%)', value: 750 },
      { keyEn: 'Total', keyAr: 'الإجمالي', value: 5750, strong: true },
    ],
  };

  readonly invoiceFooter = {
    phone: '+966 11 963 3333',
    website: 'www.saso.gov.sa',
    email: 'info@saso.gov.sa',
    addressEn: 'King Abdulaziz Road, Riyadh 11996, Saudi Arabia',
    addressAr: 'طريق الملك عبدالعزيز، الرياض 11996، المملكة العربية السعودية',
    poBoxEn: 'P.O. Box 3437',
    poBoxAr: 'ص.ب 3437',
  };

  readonly carLines = [
    { chassisNumber: 'JN1CV6AR7AM123456', requestType: 'Type Approval' },
    { chassisNumber: 'WBAFG61000L789012', requestType: 'Conformity Certificate' },
    { chassisNumber: 'SALWA2BK5HA345678', requestType: 'Type Approval' },
    { chassisNumber: '1HGCM82633A901234', requestType: 'Conformity Certificate' },
  ];

  readonly trainingLines = [
    { courseTitleAr: 'إدارة الجودة وفق ISO 9001', courseTitleEn: 'Quality Management ISO 9001' },
    { courseTitleAr: 'أنظمة السلامة الغذائية ISO 22000', courseTitleEn: 'Food Safety Systems ISO 22000' },
    { courseTitleAr: 'المعايير البيئية ISO 14001', courseTitleEn: 'Environmental Standards ISO 14001' },
  ];

  readonly wasifLines = [
    { number: 'STD-001', titleAr: 'مواصفات السلامة الكهربائية', titleEn: 'Electrical Safety Specifications', type: 'Standard', price: 500, quantity: 2, totalPrice: 1000, language: 'Arabic' },
    { number: 'STD-002', titleAr: 'متطلبات علامات الطرق', titleEn: 'Road Signs Requirements', type: 'Standard', price: 800, quantity: 1, totalPrice: 800, language: 'English' },
    { number: 'STD-003', titleAr: 'معايير المنتجات الغذائية', titleEn: 'Food Products Standards', type: 'Technical Regulation', price: 1200, quantity: 3, totalPrice: 3600, language: 'Arabic' },
    { number: 'STD-004', titleAr: 'مواصفات مواد البناء', titleEn: 'Building Materials Specifications', type: 'Standard', price: 650, quantity: 2, totalPrice: 1300, language: 'English' },
  ];

  invoiceHeaderCode = `<!-- Invoice Header -->
<div class="d-flex align-items-start justify-content-between gap-3 pb-3 mb-3 border-bottom border-3 border-primary">
  <div class="d-flex flex-column align-items-start gap-2">
    <h1 class="mb-0 fw-bold text-primary fs-2">INVOICE</h1>
    <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2 py-1 fw-semibold small">
      #INV-2024-009876
    </span>
    <div class="mt-1">
      <div class="fw-semibold text-primary small">Invoice Date</div>
      <div>10 Jun 2024</div>
    </div>
  </div>
  <div class="flex-shrink-0">
    <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded fw-bold px-3 py-2" style="width: 80px; height: 62px;">SDGA</div>
  </div>
</div>`;

  carLinesTableCode = `<!-- Vehicle Lines Table -->
<div class="table-responsive mt-4 mb-4">
  <h6 class="fw-bold text-uppercase text-primary border-bottom border-primary border-2 pb-1 mb-3">Vehicle Details</h6>
  <table class="table table-striped table-hover border mb-0">
    <thead class="table-primary border-bottom border-2">
      <tr>
        <th class="fw-bold ps-3 p-3">Chassis Number</th>
        <th class="fw-bold p-3">Request Type</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="ps-3 p-3">JN1CV6AR7AM123456</td><td class="p-3">Type Approval</td></tr>
      <tr><td class="ps-3 p-3">WBAFG61000L789012</td><td class="p-3">Conformity Certificate</td></tr>
    </tbody>
  </table>
</div>`;

  trainingLinesTableCode = `<!-- Training Lines Table -->
<div class="table-responsive mt-4 mb-4">
  <h6 class="fw-bold text-uppercase text-primary border-bottom border-primary border-2 pb-1 mb-3">Course Information</h6>
  <table class="table table-striped table-hover border mb-0">
    <thead class="table-primary border-bottom border-2">
      <tr>
        <th class="fw-bold w-50 p-3">Course Title (Arabic)</th>
        <th class="fw-bold w-50 p-3">Course Title (English)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3" dir="rtl">إدارة الجودة وفق ISO 9001</td>
        <td class="p-3">Quality Management ISO 9001</td>
      </tr>
    </tbody>
  </table>
</div>`;

  wasifLinesTableCode = `<!-- WASIF Standards Lines Table -->
<div class="table-responsive border rounded-3 shadow-sm overflow-hidden my-3">
  <div class="d-flex justify-content-between align-items-center px-3 py-2 border-bottom bg-light">
    <span class="d-inline-flex align-items-center justify-content-center fw-bold rounded-circle bg-body-secondary border" style="width: 2rem; height: 2rem;">4</span>
    <h6 class="fw-bold text-uppercase text-primary mb-0">Standards</h6>
  </div>
  <table class="table table-sm table-striped table-hover table-bordered align-middle mb-0">
    <thead class="table-primary">
      <tr>
        <th class="px-3 py-2">Package</th>
        <th class="px-3 py-2">Name (AR)</th>
        <th class="px-3 py-2">Name (EN)</th>
        <th class="px-3 py-2 text-center">Type</th>
        <th class="px-3 py-2 text-center">Price</th>
        <th class="px-3 py-2 text-center">Qty</th>
        <th class="px-3 py-2 text-center">Total</th>
        <th class="px-3 py-2 text-center">Language</th>
        <th class="px-3 py-2 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-3 py-2 fw-semibold">STD-001</td>
        <td class="px-3 py-2" dir="rtl">مواصفات السلامة الكهربائية</td>
        <td class="px-3 py-2">Electrical Safety Specifications</td>
        <td class="text-center px-3 py-2"><span class="badge rounded-pill text-bg-light border">Standard</span></td>
        <td class="text-center px-3 py-2">500</td>
        <td class="text-center px-3 py-2 fw-semibold">2</td>
        <td class="text-center fw-bold px-3 py-2">1,000</td>
        <td class="text-center px-3 py-2"><span class="badge rounded-pill text-bg-primary">Arabic</span></td>
        <td class="text-center px-3 py-2">
          <button class="btn btn-outline-success btn-sm rounded-pill px-3 py-1">
            <i class="bi bi-download me-1"></i>Download
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
}
