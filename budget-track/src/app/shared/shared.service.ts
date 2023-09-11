import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  getCategories(): Categories[]{
    return [
      {
          "categoryName": "Miscellaneous",
      },
      {
          "categoryName": "Groceries",
      },
      {
          "categoryName": "Shopping",
      },
      {
          "categoryName": "College Fee",
      },
      {
          "categoryName": "Transportation",
      },
      {
          "categoryName": "Other",
      },
      {
          "categoryName": "Insurance",
      },
      {
          "categoryName": "Recreational and Entertainment",
      },
      {
          "categoryName": "Utilities",
      },
      {
          "categoryName": "Bills",
      },
      {
          "categoryName": "Housing",
      },
      {
          "categoryName": "Learning and Development",
      },
      {
          "categoryName": "Medical and Healthcare",
      },
      {
          "categoryName": "Food",
      },
      {
          "categoryName": "Fuel",
      },
      {
          "categoryName": "Rentals",
      },
      {
          "categoryName": "Communication and Internet",
      }
  ];
  }
}
