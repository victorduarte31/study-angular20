import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle} from '@angular/material/card';

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

  type = input.required<'income' | 'outcome' | 'balance'>();
  label = input.required<string>();
   value = input.required<number>();

}
