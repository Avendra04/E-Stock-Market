package com.learning.cts.estockmarket.service;

import java.util.List;

import com.learning.cts.estockmarket.model.Company;

public interface CompanyService {

	void registerCompany(Company company);

	Company fetchCompanyDetailsByCompanyCode(String companyCode);

	List<Company> fetchAllCompanyDetails();

	void deleteCompanyByCompanyCode(String companyCode);

}
