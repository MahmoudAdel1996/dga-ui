import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-accordion',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  basicAccordionCode = `<div class="accordion" id="accordionBasic">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionBasic">
      <div class="accordion-body">
        This is the first item's accordion body. It is shown by default.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionBasic">
      <div class="accordion-body">
        This is the second item's accordion body. Hidden by default.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionBasic">
      <div class="accordion-body">
        This is the third item's accordion body. Hidden by default.
      </div>
    </div>
  </div>
</div>`;

  flushAccordionCode = `<div class="accordion accordion-flush" id="accordionFlush">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush1">
        Flush Item #1
      </button>
    </h2>
    <div id="flush1" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">Placeholder content for this accordion.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush2">
        Flush Item #2
      </button>
    </h2>
    <div id="flush2" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">Placeholder content for this accordion.</div>
    </div>
  </div>
</div>`;

  faqAccordionCode = `<div class="accordion" id="accordionFaq">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
        <i class="bi bi-question-circle me-2 text-primary"></i> What is SDGA?
      </button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#accordionFaq">
      <div class="accordion-body">
        SDGA (Saudi Digital Government Authority) oversees digital transformation across Saudi Arabia's government sector.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
        <i class="bi bi-question-circle me-2 text-primary"></i> How do I register?
      </button>
    </h2>
    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
      <div class="accordion-body">
        You can register via the official portal using your national ID. Verify your identity through Nafath authentication.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
        <i class="bi bi-question-circle me-2 text-primary"></i> What documents are required?
      </button>
    </h2>
    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
      <div class="accordion-body">
        Required documents vary by service. Generally you will need your national ID, commercial registration, and relevant technical documentation.
      </div>
    </div>
  </div>
</div>`;
}
