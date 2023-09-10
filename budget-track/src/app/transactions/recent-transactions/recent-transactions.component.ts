import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TransactionservService } from '../transactionserv.service';
import { Transaction } from '../transaction';
@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  displayedColumns: string[] = ['category', 'date', 'description', 'amount'];
  constructor(private transactionService: TransactionservService){}
  ngOnInit():void{
    this.transactions = this.transactionService.getTransactions();
  }

}
