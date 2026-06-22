import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-collapse',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseComponent {
  basicCollapseCode = `<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>`;

  multiCollapseCode = `<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapse1">Toggle first</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapse2">Toggle second</button>
  <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse">Toggle both</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapse1">
      <div class="card card-body">Some placeholder content for the first collapse component.</div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapse2">
      <div class="card card-body">Some placeholder content for the second collapse component.</div>
    </div>
  </div>
</div>`;

  infoCollapseCode = `<button class="btn btn-link p-0 text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#moreInfo" aria-expanded="false">
  <i class="bi bi-info-circle me-1"></i> Show more information
</button>
<div class="collapse mt-2" id="moreInfo">
  <div class="alert alert-info">
    <h6 class="alert-heading">Additional Information</h6>
    <p class="mb-0 small">This field requires your 10-digit national ID number. Make sure to enter it without spaces or dashes. Your ID will be validated through the Nafath system.</p>
  </div>
</div>`;
}
