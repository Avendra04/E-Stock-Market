import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyRegistrationService } from '../company-registration.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  company: Company = new Company();
  message:any;
  constructor(private service:CompanyRegistrationService,private formBuilder:FormBuilder) {
   }

  ngOnInit() {
  }

  public registerCompany(){
    let resp = this.service.registerCompany(this.company);
    resp.subscribe((data)=>this.message=data);
  }

}
