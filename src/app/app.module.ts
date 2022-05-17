import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table/table.component';
import { TableRowComponent } from './components/table/table-row/table-row.component';
import { SortButtonComponent } from './components/table/sort-button/sort-button.component';
import { ScopeBtnComponent } from './components/table/scope-btn/scope-btn.component';
import { PaginationBtnsComponent } from './components/table/pagination-btns/pagination-btns.component';
import { FormsModule } from '@angular/forms';
import { ShowGlobalsComponent } from './components/show-globals/show-globals.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { MobileSortDropdownComponent } from './components/table/mobile-sort-dropdown/mobile-sort-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    TableRowComponent,
    SortButtonComponent,
    ScopeBtnComponent,
    PaginationBtnsComponent,
    ShowGlobalsComponent,
    CustomInputComponent,
    MobileSortDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
