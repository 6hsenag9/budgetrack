import { Component, OnInit } from '@angular/core';
import { TransactionservService } from '../transactionserv.service';
import { MonthlyTransactions, Transaction } from '../transaction';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{
  monthlyTransactions:Transaction[] = [];
  months:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
  years:number[] = [2023]
  constructor(private transactionservService: TransactionservService){

  }
  ngOnInit(): void {
      this.monthlyTransactions = this.transactionservService.getMonthWiseTransactions();
  }
}
