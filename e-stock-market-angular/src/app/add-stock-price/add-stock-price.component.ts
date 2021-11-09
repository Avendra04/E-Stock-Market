import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { StockPrice } from '../stockPrice';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.css']
})
export class AddStockPriceComponent implements OnInit {

  stockPrice: StockPrice = new StockPrice();
  message: any;
  companyCode:any;
  stockPriceValue:any;
  
  constructor(private service: StockServiceService) { }

  ngOnInit() {
    
  }

  public addStock(){
    let resp = this.service.addStockPrice(this.stockPrice);
    resp.subscribe(data=> {
        this.message=data;
      });
  }
}
