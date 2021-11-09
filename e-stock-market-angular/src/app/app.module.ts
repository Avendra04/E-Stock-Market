import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { SearchDeleteCompanyComponent } from './search-delete-company/search-delete-company.component';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCompanyComponent } from './search-company/search-company.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterCompanyComponent,
    AddStockPriceComponent,
    SearchDeleteCompanyComponent,
    SearchStockComponent,
    SearchCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
