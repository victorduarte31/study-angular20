import {TransactionType} from '../enums/transaction-type';

export interface Transactions {
  title: string;
  value: number;
  type: TransactionType;
}
