import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent} from './add-employee/add-employee.component';
import {HomePageTHBComponent} from './home-page-thb/home-page-thb.component';
const routes: Routes = [
  {path: 'add-employee', component:AddEmployeeComponent},
  {path: 'home-page-thb', component:HomePageTHBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
