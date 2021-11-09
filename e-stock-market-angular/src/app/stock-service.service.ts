import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private http:HttpClient) { }

  public addStockPrice(stockPrice){
    return this.http.post("http://zuul-api.eba-3hmp3pbt.us-east-2.elasticbeanstalk.com/stockprice-ms/api/v1.0/market/stock/add",stockPrice,{responseType:'text' as 'json'})
  }

  public getStockByStartDateAndEndDate(companyCode,startDate,endDate){
    return this.http.get<Stock>("http://zuul-api.eba-3hmp3pbt.us-east-2.elasticbeanstalk.com/stockprice-ms/api/v1.0/market/stock/get/"+companyCode+"/"+startDate+"/"+endDate)
  }

}
