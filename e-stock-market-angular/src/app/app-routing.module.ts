import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { SearchDeleteCompanyComponent } from './search-delete-company/search-delete-company.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { SearchCompanyComponent } from './search-company/search-company.component';


const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:RegisterCompanyComponent},
  {path:"companies",component:SearchDeleteCompanyComponent},
  {path:"addStock",component:AddStockPriceComponent},
  {path:"searchStock",component:SearchStockComponent},
  {path:"searchCompany",component:SearchCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
