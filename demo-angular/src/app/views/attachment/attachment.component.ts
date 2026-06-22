import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-attachment',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './attachment.component.html',
  styleUrl: './attachment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachmentComponent {
  attachmentInputCode = `<!-- Attachment Input (upload mode) -->
<div class="upload-wrapper border border-2 border-dashed rounded-3 text-center p-4">
  <div class="mb-3">
    <i class="bi bi-cloud-upload fs-1 text-muted"></i>
  </div>
  <h6 class="fw-bold mb-1">Upload Documents</h6>
  <p class="text-muted small mb-3">Drag and drop files here, or click Browse</p>
  <button type="button" class="btn btn-outline-dark btn-sm px-4">Browse File</button>
  <input type="file" class="d-none" multiple accept=".pdf,.jpg,.png" />
  <p class="text-muted mt-2" style="font-size: 0.75rem;">Supported: PDF, JPG, PNG &bull; Max 5 MB each</p>
</div>`;

  attachmentViewCode = `<!-- Attachment View (read-only mode) -->
<div class="d-flex flex-column gap-2">
  <div class="d-flex align-items-center justify-content-between p-2 border rounded bg-light">
    <div class="d-flex align-items-center gap-2">
      <i class="bi bi-file-earmark-pdf text-danger fs-5"></i>
      <span class="small fw-semibold">Commercial_Registration.pdf</span>
    </div>
    <button type="button" class="btn btn-outline-primary btn-sm btn-icon">
      <i class="bi bi-download"></i>
    </button>
  </div>
  <div class="d-flex align-items-center justify-content-between p-2 border rounded bg-light">
    <div class="d-flex align-items-center gap-2">
      <i class="bi bi-file-earmark-image text-info fs-5"></i>
      <span class="small fw-semibold">National_ID_Front.jpg</span>
    </div>
    <button type="button" class="btn btn-outline-primary btn-sm btn-icon">
      <i class="bi bi-download"></i>
    </button>
  </div>
  <div class="d-flex align-items-center justify-content-between p-2 border rounded bg-light">
    <div class="d-flex align-items-center gap-2">
      <i class="bi bi-file-earmark-text text-secondary fs-5"></i>
      <span class="small fw-semibold">Technical_Certificate.pdf</span>
    </div>
    <button type="button" class="btn btn-outline-primary btn-sm btn-icon">
      <i class="bi bi-download"></i>
    </button>
  </div>
</div>`;

  attachmentWithFilesCode = `<!-- After files are selected -->
<div class="upload-wrapper border border-2 border-dashed rounded-3 text-center p-4 has-files">
  <div class="mb-3">
    <i class="bi bi-cloud-upload fs-1 text-muted"></i>
  </div>
  <h6 class="fw-bold mb-1">Upload Documents</h6>
  <button type="button" class="btn btn-outline-dark btn-sm px-4">Browse More</button>
</div>
<div class="mt-3 d-flex flex-column gap-2">
  <div class="d-flex align-items-center justify-content-between p-2 border rounded">
    <div class="d-flex align-items-center gap-2">
      <i class="bi bi-check-circle-fill text-success fs-5"></i>
      <span class="small">Commercial_Registration.pdf</span>
    </div>
    <button type="button" class="btn-close btn-sm"></button>
  </div>
  <div class="d-flex align-items-center p-2 border border-danger rounded bg-danger-subtle">
    <i class="bi bi-exclamation-circle text-danger fs-5 me-2"></i>
    <div class="flex-grow-1">
      <span class="small">large_file.pdf</span>
      <div class="text-danger small">File exceeds maximum size of 5 MB</div>
    </div>
    <button type="button" class="btn-close btn-sm ms-2"></button>
  </div>
</div>`;
}
