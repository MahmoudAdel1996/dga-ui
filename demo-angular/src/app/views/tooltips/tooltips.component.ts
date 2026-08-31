import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';
declare var bootstrap: any;

@Component({
  selector: 'app-tooltips',
  imports: [TranslatePipe, CodeExampleComponent],
  templateUrl: './tooltips.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tooltips.component.scss',
})
export class TooltipsComponent implements AfterViewInit {
  @ViewChild('tooltipContainer') tooltipContainer!: ElementRef;

  ngAfterViewInit() {
    const tooltipTriggerList = [].slice.call(
      this.tooltipContainer.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]'),
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  basicTooltipCode = `
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>`;

  htmlTooltipCode = `
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>`;
}
