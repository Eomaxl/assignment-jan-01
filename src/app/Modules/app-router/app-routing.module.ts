import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './../../Components/list/list.component';
import { AddCustComponent } from './../../Components/add-cust/add-cust.component';
import { UpdateCustComponent } from './../../Components/update-cust/update-cust.component';
import { DeleteCustComponent } from './../../Components/delete-cust/delete-cust.component';

const appRoutes : Routes = [
  {path:'list',component:ListComponent},
  {path:'create',component:AddCustComponent},
  {path:'update',component:UpdateCustComponent},
  {path:'delete',component:DeleteCustComponent},
  

]


@NgModule({
  imports: [],
  declarations: []
})
export class AppRouterModule { }