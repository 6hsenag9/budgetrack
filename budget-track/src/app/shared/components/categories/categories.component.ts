import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Categories, categoryIconMap } from 'src/app/models/categories';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories:Categories[] = [];
  categoryIconMapObj: Record<string,string> = {};
  constructor(private sharedService: SharedService){

  }
  ngOnInit(): void {
    this.categories = this.sharedService.getCategories();
    this.categoryIconMapObj = {
      "Miscellaneous" : 'help',
    "Groceries" : 'shopping_cart', 
    "Shopping" : 'shopping_bag', 
    "CollegeFee" : 'school', 
    "Transportation" : 'directions_car', 
    "Other" : 'question_mark', 
    "Insurance" : 'shield', 
    "RecreationalandEntertainment" : 'movie', 
    "Utilities" : 'lightbulb', 
    "Bills" : 'receipt', 
    "Housing" : 'home', 
    "LearningandDevelopment" : 'book', 
    "MedicalandHealthcare" : 'monitor_heart', 
    "Food" : 'local_pizza', 
    "Fuel" : 'local_gas_station', 
    "Rentals" : 'key', 
    "CommunicationandInternet" : 'wifi', 
  }
}
getCategoryName(name:string){
  return this.categoryIconMapObj[name.replace(/\s/g, "")];
}
}
