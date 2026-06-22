import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-modal',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  basicModalCode = `<!-- Trigger button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
  Launch modal
</button>

<!-- Modal -->
<div class="modal fade" id="basicModal" tabindex="-1" aria-labelledby="basicModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="basicModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal body content goes here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

  confirmModalCode = `<button type="button" class="btn btn-destructive-primary" data-bs-toggle="modal" data-bs-target="#confirmModal">
  Delete item
</button>

<div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border-0 pb-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center pt-0">
        <div class="mb-3">
          <i class="bi bi-exclamation-triangle-fill text-danger" style="font-size: 3rem;"></i>
        </div>
        <h5 class="mb-2">Are you sure?</h5>
        <p class="text-muted mb-0">This action cannot be undone. The item will be permanently deleted.</p>
      </div>
      <div class="modal-footer justify-content-center border-0 gap-2">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-destructive-primary">Yes, delete it</button>
      </div>
    </div>
  </div>
</div>`;

  formModalCode = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#formModal">
  Add new record
</button>

<div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="formModalLabel">Add new record</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="fullName" class="form-label">Full Name <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="fullName" placeholder="Enter full name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address <span class="text-danger">*</span></label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="role" class="form-label">Role</label>
          <select class="form-select" id="role">
            <option value="">Select role...</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Save record</button>
      </div>
    </div>
  </div>
</div>`;

  sizesModalCode = `<!-- Small modal -->
<button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#smallModal">Small</button>
<div class="modal fade" id="smallModal" tabindex="-1"><div class="modal-dialog modal-sm">
  <div class="modal-content"><div class="modal-header"><h5 class="modal-title">Small modal</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <div class="modal-body">Small dialog content.</div></div></div></div>

<!-- Large modal -->
<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#largeModal">Large</button>
<div class="modal fade" id="largeModal" tabindex="-1"><div class="modal-dialog modal-lg">
  <div class="modal-content"><div class="modal-header"><h5 class="modal-title">Large modal</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <div class="modal-body">Large dialog content.</div></div></div></div>

<!-- Extra large modal -->
<button type="button" class="btn btn-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#xlModal">Extra large</button>
<div class="modal fade" id="xlModal" tabindex="-1"><div class="modal-dialog modal-xl">
  <div class="modal-content"><div class="modal-header"><h5 class="modal-title">Extra large modal</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <div class="modal-body">Extra large dialog content.</div></div></div></div>`;

  scrollableModalCode = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollModal">
  Scrollable modal
</button>

<div class="modal fade" id="scrollModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Scrollable modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>This modal has a scrollable body when content exceeds the viewport height.</p>
        <!-- Long content here -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>`;
}
