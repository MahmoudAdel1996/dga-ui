import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-dialog',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  successDialogCode = `<!-- Success dialog -->
<div class="d-flex flex-column p-4" style="max-width: 400px;">
  <div class="mb-3">
    <div class="dga-featured-icon dga-featured-icon-circle text-success">
      <i class="bi bi-check-circle-fill fs-3"></i>
    </div>
  </div>
  <div class="mb-2 text-dark">
    <h4>Action Completed</h4>
  </div>
  <div class="text-dark mb-4">
    <p class="text-small text-muted">Your application has been submitted successfully. You will receive a confirmation email shortly.</p>
  </div>
  <div class="d-flex gap-2">
    <button type="button" class="btn btn-primary">View Details</button>
    <button type="button" class="btn btn-secondary">Done</button>
  </div>
</div>`;

  warningDialogCode = `<!-- Warning dialog -->
<div class="d-flex flex-column p-4" style="max-width: 400px;">
  <div class="mb-3">
    <div class="dga-featured-icon dga-featured-icon-circle text-warning">
      <i class="bi bi-exclamation-triangle-fill fs-3"></i>
    </div>
  </div>
  <div class="mb-2">
    <h4>Confirm Action</h4>
  </div>
  <div class="text-dark mb-4">
    <p class="text-small text-muted">Are you sure you want to submit this application? This action cannot be undone.</p>
  </div>
  <div class="d-flex gap-2">
    <button type="button" class="btn btn-primary">Yes, Submit</button>
    <button type="button" class="btn btn-secondary">Cancel</button>
  </div>
</div>`;

  dangerDialogCode = `<!-- Danger / destructive dialog -->
<div class="d-flex flex-column p-4" style="max-width: 400px;">
  <div class="mb-3">
    <div class="dga-featured-icon dga-featured-icon-circle text-danger">
      <i class="bi bi-x-circle-fill fs-3"></i>
    </div>
  </div>
  <div class="mb-2">
    <h4>Delete Record</h4>
  </div>
  <div class="text-dark mb-4">
    <p class="text-small text-muted">This record will be permanently deleted. All associated data will be removed and cannot be recovered.</p>
  </div>
  <div class="d-flex gap-2">
    <button type="button" class="btn btn-destructive-primary">Delete</button>
    <button type="button" class="btn btn-secondary">Cancel</button>
  </div>
</div>`;

  infoDialogCode = `<!-- Info dialog inside Bootstrap modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#infoDialog">Open Info Dialog</button>

<div class="modal fade" id="infoDialog" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" style="max-width: 420px;">
    <div class="modal-content border-0 shadow">
      <div class="modal-body p-0">
        <div class="d-flex flex-column p-4">
          <div class="mb-3">
            <div class="dga-featured-icon dga-featured-icon-circle text-info">
              <i class="bi bi-info-circle-fill fs-3"></i>
            </div>
          </div>
          <div class="mb-2"><h4>Important Notice</h4></div>
          <div class="text-muted mb-4">
            <p class="small">Please ensure all documents are uploaded before proceeding. Missing documents may delay your application.</p>
          </div>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
