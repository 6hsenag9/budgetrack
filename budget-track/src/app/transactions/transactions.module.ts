import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateTransactionComponent,
    RecentTransactionsComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CreateTransactionComponent,
    RecentTransactionsComponent
  ]
})
export class TransactionsModule { }
