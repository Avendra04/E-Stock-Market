import { Component, OnInit } from '@angular/core';
import { CompanyRegistrationService } from '../company-registration.service';
import { Company } from '../company';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {

  company:any;
  companyCode:string;

  constructor(private service:CompanyRegistrationService) { }


  public searchCompanyByCompanyCode(){
    let resp =  this.service.searchCompanyByCompanyCode(this.companyCode);
    resp.subscribe(data=>{
      this.company=data;
    });
  }

  ngOnInit() {
  }

}
