import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-cards',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  expandedCards = signal<Set<number>>(new Set());
  
  toggleCard(cardId: number) {
    this.expandedCards.update(cards => {
      const newSet = new Set(cards);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  }
  
  isExpanded(cardId: number): boolean {
    return this.expandedCards().has(cardId);
  }

  // Code examples for all card variations
  cardWithIconCode = `<div class="card" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary">Primary Action</a>
    </div>
  </div>
</div>`;

  cardWithCheckboxCode = `<div class="card" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <input class="card-title-checked form-check-input ripple" 
             type="checkbox" 
             value="" 
             id="check2" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary">Primary Action</a>
    </div>
  </div>
</div>`;

  disabledCardCode = `<div class="card disabled" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
      <input class="card-title-checked form-check-input ripple" 
             disabled 
             type="checkbox" 
             value="" 
             id="check1" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary disabled">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary disabled">Primary Action</a>
    </div>
  </div>
</div>`;

  cardNoShadowCode = `<div class="card shadow-none" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <input class="card-title-checked form-check-input ripple" 
             type="checkbox" 
             value="" 
             id="check2" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary">Primary Action</a>
    </div>
  </div>
</div>`;

  expandableCardHtmlCode = `<div class="card" tabindex="0" [class.expanded]="isExpanded(1)">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
      <input class="card-title-checked form-check-input ripple" 
             type="checkbox" 
             value="" 
             id="check3" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Expandable Card Title</h6>
    <p class="card-text">Click the arrow to see more details.</p>
    
    @if (isExpanded(1)) {
      <div class="card-expanded-content">
        <p class="mt-3">Additional content shown when expanded.</p>
        <ul>
          <li>Detail point 1</li>
          <li>Detail point 2</li>
          <li>Detail point 3</li>
        </ul>
      </div>
    }
    
    <div class="card-footer">
      <i class="hgi hgi-stroke hgi-arrow-up-01 card-expanded-icon" 
         [class.hgi-arrow-up-01]="isExpanded(1)" 
         [class.hgi-arrow-down-01]="!isExpanded(1)" 
         (click)="toggleCard(1)"></i>
    </div>
  </div>
</div>`;

  expandableCardTsCode = `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  // Use Angular signals to manage expanded state
  expandedCards = signal<Set<number>>(new Set());
  
  toggleCard(cardId: number) {
    this.expandedCards.update(cards => {
      const newSet = new Set(cards);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  }
  
  isExpanded(cardId: number): boolean {
    return this.expandedCards().has(cardId);
  }
}`;

  expandableCardSimpleHtmlCode = `<div class="card" tabindex="0" [class.expanded]="isExpanded(2)">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
    </h5>
    <h6 class="card-subtitle mb-2">Expandable Card Title</h6>
    <p class="card-text">Click the arrow to see more details.</p>
    
    @if (isExpanded(2)) {
      <div class="card-expanded-content">
        <p class="mt-3">Additional content shown when expanded.</p>
        <ul>
          <li>Detail point 1</li>
          <li>Detail point 2</li>
          <li>Detail point 3</li>
        </ul>
        <div class="d-flex align-items-center gap-3 mb-3">
          <button class="btn btn-sm btn-primary">Primary Action</button>
          <button class="btn btn-sm btn-outline-secondary">Cancel</button>
        </div>
      </div>
    }
    
    <div class="card-footer">
      <i class="hgi hgi-stroke hgi-arrow-up-01 card-expanded-icon" 
         [class.hgi-arrow-up-01]="isExpanded(2)" 
         [class.hgi-arrow-down-01]="!isExpanded(2)" 
         (click)="toggleCard(2)"></i>
    </div>
  </div>
</div>`;
}
