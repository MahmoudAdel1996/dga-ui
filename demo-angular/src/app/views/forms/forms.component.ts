import { Component, ChangeDetectionStrategy, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-forms',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent {
  private readonly platformId = inject(PLATFORM_ID);

  // Checkbox sizes
  checkboxSizesCode = `<div class="d-flex gap-2">
  <input type="checkbox" class="form-check-input ripple" aria-label="Demo checkbox medium" checked>
  <input type="checkbox" class="form-check-input ripple form-check-input-sm" aria-label="Demo checkbox small" checked>
  <input type="checkbox" class="form-check-input ripple form-check-input-xs" aria-label="Demo checkbox extra small" checked>
</div>`;

  // Checkbox variants (themes)
  checkboxVariantsCode = `<div class="row g-3">
  <div class="col-md-3">
    <h3 class="h6 mb-2">Primary</h3>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple" id="chkPrimaryMd" checked>
      <label class="form-check-label" for="chkPrimaryMd">Medium</label>
    </div>
  </div>

  <div class="col-md-3">
    <h3 class="h6 mb-2">Neutral</h3>
    <div class="form-check form-check-neutral form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple" id="chkNeutralMd" checked>
      <label class="form-check-label" for="chkNeutralMd">Medium</label>
    </div>
  </div>
</div>`;

  // Checkbox states
  checkboxStatesCode = `<div class="row g-3">
  <div class="col-md-4">
    <h3 class="h6 mb-2">Disabled</h3>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple" id="chkDisabledMd" disabled>
      <label class="form-check-label" for="chkDisabledMd">Medium unchecked</label>
    </div>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple" id="chkDisabledCheckedMd" checked disabled>
      <label class="form-check-label" for="chkDisabledCheckedMd">Medium checked</label>
    </div>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple indeterminate-check" id="chkDisabledIndeterminateMd" disabled>
      <label class="form-check-label" for="chkDisabledIndeterminateMd">Medium indeterminate</label>
    </div>
  </div>

  <div class="col-md-4">
    <h3 class="h6 mb-2">Readonly</h3>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple" id="chkReadonlyMd" readonly>
      <label class="form-check-label" for="chkReadonlyMd">Medium unchecked</label>
    </div>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple" id="chkReadonlyCheckedMd" checked readonly>
      <label class="form-check-label" for="chkReadonlyCheckedMd">Medium checked</label>
    </div>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple indeterminate-check" id="chkReadonlyIndeterminateMd" readonly>
      <label class="form-check-label" for="chkReadonlyIndeterminateMd">Medium indeterminate</label>
    </div>
  </div>

  <div class="col-md-4">
    <h3 class="h6 mb-2">Indeterminate</h3>
    <div class="form-check form-check-md mb-2">
      <input type="checkbox" class="form-check-input ripple indeterminate-check" id="chkIndeterminateMd" aria-checked="mixed">
      <label class="form-check-label" for="chkIndeterminateMd">Medium indeterminate</label>
    </div>
  </div>
</div>`;

  // Radio sizes
  radioSizesCode = `<div class="d-flex gap-2">
  <input class="form-check-input ripple" type="radio" aria-label="Demo radio medium" checked>
  <input class="form-check-input form-check-input-sm ripple" type="radio" aria-label="Demo radio small">
  <input class="form-check-input form-check-input-xs ripple" type="radio" aria-label="Demo radio extra small">
</div>`;

  // Radio variants (themes)
  radioVariantsCode = `<div class="row g-3">
  <div class="col-md-3">
    <h3 class="h6 mb-2">Primary</h3>
    <div class="form-check form-check-md mb-2">
      <input class="form-check-input ripple" type="radio" name="radioPrimaryGroup" id="radPrimaryCheckedMd" checked>
      <label class="form-check-label" for="radPrimaryCheckedMd">Medium</label>
    </div>
  </div>

  <div class="col-md-3">
    <h3 class="h6 mb-2">Neutral</h3>
    <div class="form-check form-check-neutral form-check-md mb-2">
      <input class="form-check-input ripple" type="radio" name="radioNeutral" id="radNeutralMd" checked>
      <label class="form-check-label" for="radNeutralMd">Medium</label>
    </div>
  </div>
</div>`;

  // Radio states
  radioStatesCode = `<div class="row g-3">
  <div class="col-md-4">
    <h3 class="h6 mb-2">Disabled</h3>
    <div class="form-check form-check-md mb-2">
      <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledMd" disabled>
      <label class="form-check-label" for="radDisabledMd">Medium unchecked</label>
    </div>
    <div class="form-check form-check-md mb-2">
      <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledCheckedMd" checked disabled>
      <label class="form-check-label" for="radDisabledCheckedMd">Medium checked</label>
    </div>
  </div>

  <div class="col-md-4">
    <h3 class="h6 mb-2">Readonly</h3>
    <div class="form-check form-check-md mb-2">
      <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlyMd" readonly>
      <label class="form-check-label" for="radReadonlyMd">Medium unchecked</label>
    </div>
    <div class="form-check form-check-md mb-2">
      <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlyCheckedMd" checked readonly>
      <label class="form-check-label" for="radReadonlyCheckedMd">Medium checked</label>
    </div>
  </div>
</div>`;

  // Switch examples
  switchCode = `<div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" role="switch" id="switchDefault">
  <label class="form-check-label" for="switchDefault">Default switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" role="switch" id="switchDisabled" disabled>
  <label class="form-check-label" for="switchDisabled">Disabled switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" checked type="checkbox" role="switch" id="switchChecked">
  <label class="form-check-label" for="switchChecked">Checked switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" checked type="checkbox" role="switch" id="switchDisabledChecked" disabled>
  <label class="form-check-label" for="switchDisabledChecked">Disabled checked switch</label>
</div>`;

  // Input size variations
  inputSizesCode = `<div class="row g-3">
  <div class="col-md-6">
    <label for="textInputLg" class="form-label">Large input</label>
    <input class="form-control form-control-lg" type="text" id="textInputLg" placeholder="Large input">
  </div>
  <div class="col-md-6">
    <label for="textInputDefault" class="form-label">Default input</label>
    <input class="form-control" type="text" id="textInputDefault" placeholder="Default input">
  </div>
</div>`;

  // Input variants
  inputVariantsCode = `<div class="row g-3 mb-4">
      <div class="col-md-4">
        <label for="inputNormal" class="form-label">Normal</label>
        <input class="form-control" type="text" id="inputNormal" placeholder="Normal input">
      </div>
      <div class="col-md-4">
        <label for="inputFilledDarker" class="form-label">Filled darker</label>
        <input class="form-control filled-darker" type="text" id="inputFilledDarker" placeholder="Filled darker input">
      </div>
      <div class="col-md-4">
        <label for="inputFilledLighter" class="form-label">Filled lighter</label>
        <input class="form-control filled-lighter" type="text" id="inputFilledLighter"
          placeholder="Filled lighter input">
      </div>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username"
            aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-text subtle" id="basic-addon2">@example.com</span>
          <input required type="text" class="form-control form-control" placeholder="Recipient’s username" aria-label="Recipient’s username"
            aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>
      </div>`;

  // Input states
  inputStatesCode = `<div class="row g-3">
  <div class="col-md-4">
    <label for="inputRequired" class="form-label">Required <span class="text-danger">*</span></label>
    <input class="form-control" required type="text" id="inputRequired" placeholder="Required input">
  </div>
  <div class="col-md-4">
    <label for="inputReadonly" class="form-label">Readonly</label>
    <input class="form-control" readonly type="text" id="inputReadonly" value="Readonly value">
  </div>
  <div class="col-md-4">
    <label for="inputDisabled" class="form-label">Disabled</label>
    <input class="form-control" disabled type="text" id="inputDisabled" value="Disabled value">
  </div>
  <div class="col-md-4">
    <label for="inputInvalid" class="form-label">Invalid</label>
    <input class="form-control" type="text" id="inputInvalid" value="123" required pattern="^[0-9]+$">
    <div class="form-text text-danger">This field contains invalid data</div>
  </div>
</div>`;

  // Select dropdown example
  selectCode = `<div class="mb-3">
  <label for="exampleSelect" class="form-label">Example select</label>
  <select class="form-select" id="exampleSelect">
    <option value="" disabled selected>Select an option</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>`;

  // Range slider example
  rangeCode = `<div class="mb-3">
  <label for="customRange" class="form-label">Example range</label>
  <input type="range" class="form-range" id="customRange">
</div>`;
}
