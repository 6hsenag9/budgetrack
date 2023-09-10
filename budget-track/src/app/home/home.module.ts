import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionsModule,
    SharedModule
  ]
})
export class HomeModule { }
