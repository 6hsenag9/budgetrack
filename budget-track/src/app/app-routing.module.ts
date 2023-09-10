import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home/components/home-view/home-view.component';
import { OverviewComponent } from './transactions/overview/overview.component';

const routes: Routes = [
  {path: 'home', component: HomeViewComponent},
  {path: 'overview', component: OverviewComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: "**", component: HomeViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
