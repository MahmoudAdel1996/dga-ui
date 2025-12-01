import { Component, ChangeDetectionStrategy, AfterViewInit, inject, PLATFORM_ID, viewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-forms',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  // Checkbox examples
  checkboxPrimaryCode = `<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkPrimaryMd" checked>
  <label class="form-check-label" for="chkPrimaryMd">Medium</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkPrimarySm" checked>
  <label class="form-check-label" for="chkPrimarySm">Small</label>
</div>
<div class="form-check form-check-xs mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkPrimaryXs" checked>
  <label class="form-check-label" for="chkPrimaryXs">Extra small</label>
</div>`;

  checkboxDisabledCode = `<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkDisabledMd" disabled>
  <label class="form-check-label" for="chkDisabledMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkDisabledCheckedMd" checked disabled>
  <label class="form-check-label" for="chkDisabledCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkDisabledSm" disabled>
  <label class="form-check-label" for="chkDisabledSm">Small unchecked</label>
</div>`;

  checkboxReadonlyCode = `<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkReadonlyMd" readonly>
  <label class="form-check-label" for="chkReadonlyMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkReadonlyCheckedMd" checked readonly>
  <label class="form-check-label" for="chkReadonlyCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkReadonlySm" readonly>
  <label class="form-check-label" for="chkReadonlySm">Small unchecked</label>
</div>`;

  checkboxNeutralCode = `<div class="form-check form-check-neutral form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkNeutralMd" checked>
  <label class="form-check-label" for="chkNeutralMd">Medium</label>
</div>
<div class="form-check form-check-neutral form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkNeutralSm" checked>
  <label class="form-check-label" for="chkNeutralSm">Small</label>
</div>
<div class="form-check form-check-neutral form-check-xs mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkNeutralXs" checked>
  <label class="form-check-label" for="chkNeutralXs">Extra small</label>
</div>`;

  // Indeterminate checkbox example
  checkboxIndeterminateHtmlCode = `<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkIndeterminate" #indeterminateCheckbox>
  <label class="form-check-label" for="chkIndeterminate">Indeterminate checkbox</label>
</div>`;

  checkboxIndeterminateTsCode = `import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('indeterminateCheckbox') indeterminateCheckbox!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    // Set checkbox to indeterminate state
    if (this.indeterminateCheckbox) {
      this.indeterminateCheckbox.nativeElement.indeterminate = true;
    }
  }
}

// Alternative approach using direct DOM query
ngAfterViewInit(): void {
  const checkbox = document.getElementById('chkIndeterminate') as HTMLInputElement;
  if (checkbox) {
    checkbox.indeterminate = true;
  }
}`;

  // Radio button examples
  radioPrimaryCode = `<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioPrimaryGroup" id="radPrimaryCheckedMd" checked>
  <label class="form-check-label" for="radPrimaryCheckedMd">Medium</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioPrimaryGroup" id="radPrimaryCheckedSm">
  <label class="form-check-label" for="radPrimaryCheckedSm">Small</label>
</div>
<div class="form-check form-check-xs mb-2">
  <input class="form-check-input ripple" type="radio" name="radioPrimaryGroup" id="radPrimaryCheckedXs">
  <label class="form-check-label" for="radPrimaryCheckedXs">Extra small</label>
</div>`;

  radioDisabledCode = `<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledMd" disabled>
  <label class="form-check-label" for="radDisabledMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledCheckedMd" checked disabled>
  <label class="form-check-label" for="radDisabledCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledSm" disabled>
  <label class="form-check-label" for="radDisabledSm">Small unchecked</label>
</div>`;

  radioReadonlyCode = `<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlyMd" readonly>
  <label class="form-check-label" for="radReadonlyMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlyCheckedMd" checked readonly>
  <label class="form-check-label" for="radReadonlyCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlySm" readonly>
  <label class="form-check-label" for="radReadonlySm">Small unchecked</label>
</div>`;

  radioNeutralCode = `<div class="form-check form-check-neutral form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioNeutral" id="radNeutralMd" checked>
  <label class="form-check-label" for="radNeutralMd">Medium</label>
</div>
<div class="form-check form-check-neutral form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioNeutral" id="radNeutralSm">
  <label class="form-check-label" for="radNeutralSm">Small</label>
</div>
<div class="form-check form-check-neutral form-check-xs mb-2">
  <input class="form-check-input ripple" type="radio" name="radioNeutral" id="radNeutralXs">
  <label class="form-check-label" for="radNeutralXs">Extra small</label>
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

  // Text input examples
  textInputEmailCode = `<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com">
  <div class="form-text">We'll never share your email with anyone else.</div>
</div>`;

  textInputPasswordCode = `<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
</div>`;

  textInputTextareaCode = `<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>`;

  // Select dropdown example
  selectCode = `<div class="mb-3">
  <label for="exampleSelect" class="form-label">Example select</label>
  <select class="form-select" id="exampleSelect">
    <option selected>Open this select menu</option>
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

  // Input size variations
  inputSizesCode = `<input class="form-control form-control-lg mb-2" type="text" placeholder="Large input" aria-label="Large input">
<input class="form-control mb-2" type="text" placeholder="Default input" aria-label="Default input">
<input class="form-control form-control-sm" type="text" placeholder="Small input" aria-label="Small input">`;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      queueMicrotask(() => {
        document.querySelectorAll('[type="checkbox"]').forEach((checkbox: any) => {
            if (checkbox.id.includes('Indeterminate')) {
              checkbox.indeterminate = true
              console.log(checkbox)
            }
          })
      });
    }
  }
}
