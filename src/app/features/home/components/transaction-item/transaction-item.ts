import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-transaction-item',
  imports: [
    MatCard,
    MatButton
  ],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss'
})
export class TransactionItem {

}
