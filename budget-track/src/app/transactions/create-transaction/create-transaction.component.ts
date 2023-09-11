import { Component, OnInit, inject } from '@angular/core';
// import {FormControl, FormGroup} from '@angular/forms'
// import {interfaces}
import { Transaction } from '../transaction';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories';
import { SharedService } from 'src/app/shared/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit{
  private fireStore: Firestore = inject(Firestore);
  categories:Categories[] = [];
  transactions$: Observable<Transaction[]> | undefined; 
  transaction: Transaction = {
    amount: undefined,
    createdAt: new Date(),
    category: '',
    financeName: '',
    id: '',
    isIncome: false,
    description: '',
  };
  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    this.categories = this.sharedService.getCategories();
  }

  isIncome(p:boolean){
    this.transaction.isIncome = p;
  }

  addTransaction(addTransactionForm:NgForm): void{
    const transactionCollection = collection(this.fireStore, 'transactions');
    addDoc(transactionCollection, {
      'amount' : this.transaction.amount,
      'date': this.transaction.createdAt,
      'category': this.transaction.category,
      'financeName': this.transaction.financeName,
      'isIncome': this.transaction.isIncome,
      'description': this.transaction.description,
    })
    addTransactionForm.reset();
  }
}
