import {Component, signal} from '@angular/core';
import {Balance} from './components/balance/balance';
import {TransactionItem} from './components/transaction-item/transaction-item';
import {Transactions} from '../../shared/transaction/interfaces/transactions';
import {TransactionType} from '../../shared/transaction/enums/transaction-type';

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

  transaction = signal<Transactions[]>([
    {title:'Salario', value: 500, type: TransactionType.INCOME},
    {title:'VA', value: 50, type: TransactionType.INCOME},
    {title:'Aluguel', value: 200, type: TransactionType.OUTCOME},
  ]);

}
