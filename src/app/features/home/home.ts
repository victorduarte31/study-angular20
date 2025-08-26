import {Component, signal} from '@angular/core';
import {Balance} from './components/balance/balance';
import {TransactionItem} from './components/transaction-item/transaction-item';

@Component({
  selector: 'app-home',
  imports: [
    Balance,
    TransactionItem
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  transaction = signal([
    {value: 500, type: 'income'},
    {value: 150, type: 'outcome'},
    {value: 200, type: 'outcome'},
    {value: 100, type: 'income'},
  ]);

}
