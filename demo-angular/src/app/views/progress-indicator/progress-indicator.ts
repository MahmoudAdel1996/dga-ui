import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-progress-indicator',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './progress-indicator.html',
  styleUrl: './progress-indicator.scss',
})
export class ProgressIndicator {
  verticalProgressHtml = `<div class="progress-indicator vertical">
  <div class="progress-steps">
    <div class="step completed hover" tabindex="0">
      <div class="step-circle">1</div>
      <div class="step-content">
        <div class="text-dark">Personal Information</div>
        <div class="text-muted small">Complete your personal details</div>
      </div>
    </div>
    <div class="step active hover" tabindex="0">
      <div class="step-circle">2</div>
      <div class="step-content">
        <div class="text-dark">Select Services</div>
        <div class="text-muted small">Choose the services you need</div>
      </div>
    </div>
    <div class="step upcoming hover">
      <div class="step-circle">3</div>
      <div class="step-content">
        <div class="text-dark">Payments</div>
        <div class="text-muted small">Complete payment process</div>
      </div>
    </div>
    <div class="step upcoming">
      <div class="step-circle">4</div>
      <div class="step-content">
        <div class="text-dark">Confirmation</div>
        <div class="text-muted small">Review and confirm details</div>
      </div>
    </div>
  </div>
</div>`;

  horizontalProgressHtml = `<div class="progress-indicator horizontal">
  <div class="progress-steps">
    <div class="step completed hover" tabindex="0">
      <div class="step-circle">1</div>
      <div class="step-content">
        <div class="text-dark">Personal Information</div>
        <div class="text-muted small">Complete your personal details</div>
      </div>
    </div>
    <div class="step active hover" tabindex="0">
      <div class="step-circle">2</div>
      <div class="step-content">
        <div class="text-dark">Select Services</div>
        <div class="text-muted small">Choose the services you need</div>
      </div>
    </div>
    <div class="step upcoming hover">
      <div class="step-circle">3</div>
      <div class="step-content">
        <div class="text-dark">Payments</div>
        <div class="text-muted small">Complete payment process</div>
      </div>
    </div>
    <div class="step upcoming">
      <div class="step-circle">4</div>
      <div class="step-content">
        <div class="text-dark">Confirmation</div>
        <div class="text-muted small">Review and confirm details</div>
      </div>
    </div>
  </div>
</div>`;

  progressIndicatorScss = `.progress-indicator {
  position: relative;

  .step {
    flex: 1;
    text-align: start;
    position: relative;

    &::after {
      content: '';
      background-color: $gray-300;
      z-index: 1;
    }

    &.hover {
      cursor: pointer;
    }

    .step-circle {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      border: 2px solid $gray-300;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $white;
      color: $gray-300;
      font-weight: $font-weight-semibold;
      position: relative;
      z-index: 2;
      transition: all 0.3s ease;
    }

    .step-content {
      transition: all 0.2s ease;
      display: inline-block;
      border: 2px solid transparent;
      padding-block: 4px 8px;
      padding-inline-end: 4px;
      border-radius: $radius-sm;
    }

    &.active {
      .step-circle {
        border-color: $primary;
        color: $primary;
      }
    }

    &.completed {
      .step-circle {
        background-color: $primary;
        border-color: $primary;
        color: $white;
      }

      &::after {
        background-color: $primary;
      }
    }

    &:focus-visible,
    &.focused,
    &:focus {
      outline: none !important;

      .step-circle {
        box-shadow: 0 0 0 2px $white, 0 0 0 5px $dark;
      }

      .step-content {
        border: 2px solid $dark;
        background-color: rgba($white, 0.5);
      }
    }
  }

  &.horizontal {
    .progress-steps {
      display: flex;
      flex-direction: row;
      align-items: start;
      flex-wrap: wrap;
    }

    .step {
      display: flex;
      flex-direction: column;
      align-items: start;
      text-align: start;
      flex: 1;
      max-width: 12.5rem;
      max-height: 12.5rem;
    }

    .step-circle {
      margin: 0 0 .75rem 0;
    }

    .step:not(:last-child)::after {
      top: 1.125rem;
      inset-inline-start: 2.25rem;
      inset-inline-end: 0;
      height: .125rem;
    }
  }

  &.vertical {
    .progress-steps {
      display: flex;
      flex-direction: column;
      max-width: 18.75rem;
    }

    .step {
      display: flex;
      align-items: flex-start;
      position: relative;
      padding: 0 0 1.25rem 0;
    }

    .step-circle {
      flex-shrink: 0;
    }

    .step-content {
      flex: 1;
      margin-inline-start: 0.75rem;
      padding-top: 0;
    }

    .step:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 1.125rem;
      inset-inline-start: calc(1.125rem - 1px);
      bottom: 0px;
      width: .125rem;
      z-index: 0;
      z-index: 0 !important;
    }

    .step:last-child {
      padding-bottom: 0;
    }
  }
}`;
}
