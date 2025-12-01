import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cards',
  imports: [TranslateModule],
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
}
