package com.learning.cts.estockmarket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.jboss.logging.Logger;

import com.learning.cts.estockmarket.model.Company;
import com.learning.cts.estockmarket.service.CompanyService;

@RestController
@RequestMapping("/api/v1.0/market/company")
@CrossOrigin("*")
public class CompanyController {
	
	@Autowired
	CompanyService companyService;
	
	Logger logger = Logger.getLogger(CompanyController.class);

	@PostMapping("/register")
	public ResponseEntity<String> registerCompany(@RequestBody Company company) {
		companyService.registerCompany(company);
		logger.info("Register new company done successfully");
		return new ResponseEntity<>("Added company successfully!", HttpStatus.CREATED);
	}

	@GetMapping("/info/{companyCode}")
	public ResponseEntity<Company> fetchCompanyDetailsByCompanyCode(@PathVariable("companyCode") String companyCode) {
		Company company = companyService.fetchCompanyDetailsByCompanyCode(companyCode);
		logger.info("fetching company details for:::::"+company);
		return new ResponseEntity<>(company, HttpStatus.OK);
	}

	@GetMapping("/getall")
	public ResponseEntity<List<Company>> fetchAllCompanyDetails() {
		List<Company> companyList = companyService.fetchAllCompanyDetails();
		logger.info("fetching all company details");
		return new ResponseEntity<>(companyList, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{companyCode}")
	public ResponseEntity<List<Company>> deleteCompanyByCompanyCode(@PathVariable("companyCode") String companyCode) {
		companyService.deleteCompanyByCompanyCode(companyCode);
		List<Company> companyList = companyService.fetchAllCompanyDetails();
		logger.info("deleting company:::::"+companyCode);
		return new ResponseEntity<>(companyList,HttpStatus.OK);
	}

}
