import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-alerts',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent {
  // Standard Dismissible Alerts
  successAlertCode = `<div class="alert alert-success alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-tick-02 alert-icon"></i>
  <div>
    <strong class="alert-title">Success!</strong> Your action completed successfully.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Action</button>
      <button type="button" class="btn btn-subtle">Cancel</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  dangerAlertCode = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-help-circle alert-icon"></i>
  <div>
    <strong class="alert-title">Error!</strong> Something went wrong with your request.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Retry</button>
      <button type="button" class="btn btn-subtle">Cancel</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  warningAlertCode = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-alert-02 alert-icon"></i>
  <div>
    <strong class="alert-title">Warning!</strong> Please review before proceeding.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Review</button>
      <button type="button" class="btn btn-subtle">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  infoAlertCode = `<div class="alert alert-info alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-help-circle alert-icon"></i>
  <div>
    <strong class="alert-title">Info</strong> Here's some helpful information.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Learn More</button>
      <button type="button" class="btn btn-subtle">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  neutralAlertCode = `<div class="alert alert-neutral alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-help-circle alert-icon"></i>
  <div>
    <strong class="alert-title">Neutral</strong> Standard notification message.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Action</button>
      <button type="button" class="btn btn-subtle">Cancel</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  // Side-bordered Alerts
  sideSuccessAlertCode = `<div class="alert alert-side alert-success alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-tick-02 alert-icon"></i>
  <div>
    <strong class="alert-title">Success!</strong> Your action completed successfully.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Action</button>
      <button type="button" class="btn btn-subtle">Cancel</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  sideDangerAlertCode = `<div class="alert alert-side alert-danger alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-help-circle alert-icon"></i>
  <div>
    <strong class="alert-title">Error!</strong> Something went wrong with your request.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Retry</button>
      <button type="button" class="btn btn-subtle">Cancel</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  sideWarningAlertCode = `<div class="alert alert-side alert-warning alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-alert-02 alert-icon"></i>
  <div>
    <strong class="alert-title">Warning!</strong> Please review before proceeding.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Review</button>
      <button type="button" class="btn btn-subtle">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  sideInfoAlertCode = `<div class="alert alert-side alert-info alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-alert-02 alert-icon"></i>
  <div>
    <strong class="alert-title">Info</strong> Here's some helpful information.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Learn More</button>
      <button type="button" class="btn btn-subtle">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  sideNeutralAlertCode = `<div class="alert alert-side alert-neutral alert-dismissible fade show" role="alert">
  <i class="hgi hgi-stroke hgi-help-circle alert-icon"></i>
  <div>
    <strong class="alert-title">Neutral</strong> Standard notification message.
    <div class="alert-footer">
      <button type="button" class="btn btn-subtle">Action</button>
      <button type="button" class="btn btn-subtle">Cancel</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}
