import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

interface Step {
  /** Translation key for the step name. */
  nameKey: string;
  /** Translation key for the step description. */
  descKey: string;
}

type StepperSize =
  | ''
  | 'radial-stepper-xl'
  | 'radial-stepper-lg'
  | 'radial-stepper-sm'
  | 'radial-stepper-xs';
type StepperVariant =
  | 'radial-stepper-primary'
  | 'radial-stepper-neutral'
  | 'radial-stepper-on-color';

@Component({
  selector: 'app-radial-stepper',
  imports: [CommonModule, FormsModule, TranslateModule, CodeExampleComponent],
  templateUrl: './radial-stepper.component.html',
  styleUrl: './radial-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadialStepperComponent {
  readonly steps: Step[] = [
    { nameKey: 'radial_stepper.step1_name', descKey: 'radial_stepper.step1_desc' },
    { nameKey: 'radial_stepper.step2_name', descKey: 'radial_stepper.step2_desc' },
    { nameKey: 'radial_stepper.step3_name', descKey: 'radial_stepper.step3_desc' },
    { nameKey: 'radial_stepper.step4_name', descKey: 'radial_stepper.step4_desc' },
  ];

  // ── Playground state ──────────────────────────────────────────────────────
  readonly activeStep = signal(2);
  readonly size = signal<StepperSize>('');
  readonly variant = signal<StepperVariant>('radial-stepper-primary');
  readonly showText = signal(true);
  readonly showStepName = signal(true);
  readonly showStepDescription = signal(true);
  readonly showAdjacentSteps = signal(true);
  readonly rtl = signal(false);

  /** 0–100, fed straight into the `--radial-stepper-progress` custom property. */
  readonly progress = computed(() => (this.activeStep() / this.steps.length) * 100);

  readonly currentStep = computed(() => this.steps[this.activeStep() - 1]);
  readonly previousStep = computed(() =>
    this.activeStep() > 1 ? this.steps[this.activeStep() - 2] : null,
  );
  readonly nextStep = computed(() =>
    this.activeStep() < this.steps.length ? this.steps[this.activeStep()] : null,
  );

  /** Classes for the playground block, mirroring the Storybook controls. */
  readonly playgroundClasses = computed(() =>
    ['radial-stepper', this.size(), this.variant()].filter(Boolean).join(' '),
  );

  next(): void {
    this.activeStep.update((step) => Math.min(step + 1, this.steps.length));
  }

  prev(): void {
    this.activeStep.update((step) => Math.max(step - 1, 1));
  }

  // ── Static examples ───────────────────────────────────────────────────────
  readonly sizeExamples: { label: string; cssClass: string }[] = [
    { label: '120px — .radial-stepper-xl', cssClass: 'radial-stepper-xl' },
    { label: '80px — .radial-stepper-lg', cssClass: 'radial-stepper-lg' },
    { label: '64px — default', cssClass: '' },
    { label: '48px — .radial-stepper-sm', cssClass: 'radial-stepper-sm' },
    { label: '40px — .radial-stepper-xs', cssClass: 'radial-stepper-xs' },
  ];

  readonly basicCode = `<!-- Progress is a plain custom property: activeStep / totalSteps * 100 -->
<div
  class="radial-stepper"
  style="--radial-stepper-progress: 50"
  role="progressbar"
  aria-label="Application progress"
  aria-valuenow="2"
  aria-valuemin="1"
  aria-valuemax="4"
>
  <div class="radial-stepper-ring">
    <div class="radial-stepper-label">2 of 4</div>
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle class="radial-stepper-track" cx="50" cy="50" r="45" stroke-width="10"></circle>
      <circle class="radial-stepper-tail" cx="50" cy="50" r="45" stroke-width="10"></circle>
    </svg>
  </div>
  <div class="radial-stepper-text">
    <span class="radial-stepper-pre">Previous: Introduction</span>
    <h3 class="radial-stepper-name">Details</h3>
    <p class="radial-stepper-desc">Here are some additional details.</p>
    <span class="radial-stepper-next">Next: Confirmation</span>
  </div>
</div>`;

  readonly sizesCode = `<!-- 120px --> <div class="radial-stepper radial-stepper-xl" style="--radial-stepper-progress: 50">…</div>
<!-- 80px  --> <div class="radial-stepper radial-stepper-lg" style="--radial-stepper-progress: 50">…</div>
<!-- 64px  --> <div class="radial-stepper" style="--radial-stepper-progress: 50">…</div>
<!-- 48px  --> <div class="radial-stepper radial-stepper-sm" style="--radial-stepper-progress: 50">…</div>
<!-- 40px  --> <div class="radial-stepper radial-stepper-xs" style="--radial-stepper-progress: 50">…</div>`;

  readonly variantsCode = `<!-- Primary (default) -->
<div class="radial-stepper radial-stepper-primary" style="--radial-stepper-progress: 50">…</div>

<!-- Neutral -->
<div class="radial-stepper radial-stepper-neutral" style="--radial-stepper-progress: 50">…</div>

<!-- On color — place on a filled surface -->
<div class="bg-primary p-4 rounded">
  <div class="radial-stepper radial-stepper-on-color" style="--radial-stepper-progress: 50">…</div>
</div>`;

  readonly textOptionsCode = `<!-- Ring only: drop .radial-stepper-text entirely -->
<div class="radial-stepper" style="--radial-stepper-progress: 50">
  <div class="radial-stepper-ring">…</div>
</div>

<!-- Name only: keep .radial-stepper-name, drop the description and adjacent steps -->
<div class="radial-stepper" style="--radial-stepper-progress: 50">
  <div class="radial-stepper-ring">…</div>
  <div class="radial-stepper-text">
    <h3 class="radial-stepper-name">Details</h3>
  </div>
</div>`;

  readonly rtlCode = `<!-- The ring sweeps counter-clockwise and the text column flips automatically -->
<div dir="rtl">
  <div class="radial-stepper" style="--radial-stepper-progress: 50">
    <div class="radial-stepper-ring">
      <div class="radial-stepper-label">٢ من ٤</div>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle class="radial-stepper-track" cx="50" cy="50" r="45" stroke-width="10"></circle>
        <circle class="radial-stepper-tail" cx="50" cy="50" r="45" stroke-width="10"></circle>
      </svg>
    </div>
    <div class="radial-stepper-text">
      <h3 class="radial-stepper-name">الخطوة الثانية</h3>
      <p class="radial-stepper-desc">في هذه الخطوة نضيف بعض التفاصيل الإضافية.</p>
    </div>
  </div>
</div>`;
}
