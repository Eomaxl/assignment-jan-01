import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './../../Components/list/list.component';
import { AddCustComponent } from './../../Components/add-cust/add-cust.component';
import { UpdateCustComponent } from './../../Components/update-cust/update-cust.component';
import { DeleteCustComponent } from './../../Components/delete-cust/delete-cust.component';
import { OverviewComponent } from './../../Components/overview/overview.component';
import {UserDetailsComponent } from './../../Components/user-details/user-details.component';

const appRoutes : Routes = [
  {path:'overview',component:OverviewComponent},
  {path:'list',component:ListComponent ,children:[
    {path:':id',component:UserDetailsComponent}
  ]},
  {path:'create',component:AddCustComponent},
  {path:'update',component:UpdateCustComponent},
  {path:'delete',component:DeleteCustComponent},
  { path: '**', redirectTo:'/overview',pathMatch:'full'}

]


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule ]
})
export class AppRouterModule { }