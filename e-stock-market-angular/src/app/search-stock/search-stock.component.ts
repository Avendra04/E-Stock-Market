import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockServiceService } from '../stock-service.service';
import { CompanyRegistrationService } from '../company-registration.service';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent implements OnInit {

  stocks: any;
  companyCode:string;
  startDate:Date;
  endDate:Date;
  min:number;
  max:number;
  average:number;
  stockDate:any;
  stockPriceValue:any;
  companies:any;

  constructor(private service:StockServiceService,private companyService: CompanyRegistrationService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data});
  }

  public searchStockByEndDateAndStartDate(){
    let resp = this.service.getStockByStartDateAndEndDate(this.companyCode,this.startDate,this.endDate);
    resp.subscribe(data=>{
      this.stocks=data.stockPriceList;
      this.average=data.average;
      this.max=data.max;
      this.min=data.min;
    });
  }
  
}
