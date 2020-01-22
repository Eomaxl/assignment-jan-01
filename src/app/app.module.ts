import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SubNavComponent } from './Components/sub-nav/sub-nav.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { CustSubNavComponent } from './Components/cust-sub-nav/cust-sub-nav.component';
import { ListComponent } from './Components/list/list.component';
import { AddCustComponent } from './Components/add-cust/add-cust.component';
import { DeleteCustComponent } from './Components/delete-cust/delete-cust.component';
import { UpdateCustComponent } from './Components/update-cust/update-cust.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, SubNavComponent, OverviewComponent, CustSubNavComponent, ListComponent, AddCustComponent, DeleteCustComponent, UpdateCustComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
