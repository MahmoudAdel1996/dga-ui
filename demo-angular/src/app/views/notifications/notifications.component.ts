import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-notifications',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  notificationPanelCode = `<div class="card h-100">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-bell-fill text-primary fs-5"></i>
        <h5 class="mb-0">Notifications</h5>
        <span class="badge bg-primary rounded-pill">4</span>
      </div>
      <a href="/notifications" class="btn btn-link btn-sm text-decoration-none">View All</a>
    </div>
    <div class="notification-list d-flex flex-column gap-2">
      <!-- Unread notification -->
      <div class="d-flex align-items-start gap-3 p-2 border rounded bg-primary-subtle">
        <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white flex-shrink-0" style="width: 36px; height: 36px;">
          <i class="bi bi-bell-fill small"></i>
        </div>
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-start gap-2">
            <span class="fw-semibold small">License renewal reminder</span>
            <small class="text-muted text-nowrap">2h ago</small>
          </div>
          <p class="text-muted small mb-0">Your license expires in 30 days. Renew now to avoid service interruption.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

  notificationListCode = `<!-- Full notifications page list -->
<div class="list-group">
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between align-items-start gap-3">
      <div class="d-flex gap-3">
        <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0" style="width: 40px; height: 40px;">
          <i class="bi bi-bell-fill"></i>
        </div>
        <div>
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-circle-fill text-primary" style="font-size: 0.5rem;"></i>
            <h6 class="mb-0">License renewal reminder</h6>
          </div>
          <p class="small text-muted mb-1">Your license expires in 30 days. Renew now to avoid service interruption.</p>
          <small class="text-muted">2 hours ago</small>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
