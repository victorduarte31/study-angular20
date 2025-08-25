import {Component, computed, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle} from '@angular/material/card';

type CardType = 'income' | 'outcome' | 'balance';
type ValueCssClass = 'income' | 'outcome';

@Component({
  selector: 'app-balance-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
  ],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss'
})
export class BalanceCard {

  type = input.required<CardType>();
  label = input.required<string>();
  value = input.required<number>();

  cssClass = computed<ValueCssClass>(() => {
    if (this.type() === 'income') {
      return 'income';
    }

    if (this.type() === 'outcome') {
      return 'outcome';
    }

    return this.value() > 0 ? 'income' : 'outcome';
  });
}
