import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyRegistrationService {

  constructor(private http:HttpClient) { }

  public registerCompany(company){
    return this.http.post("http://zuul-api.eba-3hmp3pbt.us-east-2.elasticbeanstalk.com/company-ms/api/v1.0/market/company/register",company,{responseType:'text' as 'json'});
  }

  public getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>("http://zuul-api.eba-3hmp3pbt.us-east-2.elasticbeanstalk.com/company-ms/api/v1.0/market/company/getall")
  }

  public searchCompanyByCompanyCode(companyCode){
    return this.http.get<Company>("http://zuul-api.eba-3hmp3pbt.us-east-2.elasticbeanstalk.com/company-ms/api/v1.0/market/company/info/"+companyCode);
  }

  public deleteCompany(companyCode){
    return this.http.delete<Company[]>("http://zuul-api.eba-3hmp3pbt.us-east-2.elasticbeanstalk.com/company-ms/api/v1.0/market/company/delete/"+companyCode);
  }
}
