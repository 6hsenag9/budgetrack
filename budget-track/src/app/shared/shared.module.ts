import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CategoriesComponent
  ]
})
export class SharedModule { }
