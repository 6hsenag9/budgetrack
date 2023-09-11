import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { MonthlyTransactions } from './transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionservService {

  constructor() { }
  getTransactions(): Transaction[]{
    return [];
  }

  getMonthWiseTransactions():Transaction[]{
    return[];
  }
}
