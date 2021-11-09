package com.learning.cts.estockmarket.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.cts.estockmarket.model.Company;
import com.learning.cts.estockmarket.repository.CompanyRepository;
import com.learning.cts.estockmarket.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	CompanyRepository companyRepository;
	
	@Override
	public void registerCompany(Company company) {
		companyRepository.save(company);
	}

	@Override
	public Company fetchCompanyDetailsByCompanyCode(String companyCode) {
		return companyRepository.fetchByCompanyCode(companyCode);
	}

	@Override
	public List<Company> fetchAllCompanyDetails() {
		return companyRepository.findAll();
	}

	@Override
	public void deleteCompanyByCompanyCode(String companyCode) {
		companyRepository.deleteByCompanyCode(companyCode);
	}

}
