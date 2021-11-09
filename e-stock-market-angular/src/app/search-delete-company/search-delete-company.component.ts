import { Component, OnInit } from '@angular/core';
import { CompanyRegistrationService } from '../company-registration.service';
import { Company } from '../company';

@Component({
  selector: 'app-search-delete-company',
  templateUrl: './search-delete-company.component.html',
  styleUrls: ['./search-delete-company.component.css']
})
export class SearchDeleteCompanyComponent implements OnInit {

  company:any;
  companies: any;
  companyCode:string;
  
  constructor(private service:CompanyRegistrationService) { }

  public deleteCompany(companyCode:string){
    let resp =  this.service.deleteCompany(companyCode);
    resp.subscribe(data =>{
      this.companies=data;
    });
    this.ngOnInit();
  }

  ngOnInit() {
    this.service.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }


}
