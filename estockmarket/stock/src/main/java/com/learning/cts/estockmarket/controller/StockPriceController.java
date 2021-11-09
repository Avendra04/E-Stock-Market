package com.learning.cts.estockmarket.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.cts.estockmarket.model.StockPrice;
import com.learning.cts.estockmarket.model.StockPriceDTO;
import com.learning.cts.estockmarket.service.StockPriceService;

@RestController
@RequestMapping("/api/v1.0/market/stock")
@CrossOrigin("*")
public class StockPriceController {
	
	@Autowired
	StockPriceService stockPriceService;
	
	Logger logger = Logger.getLogger(StockPriceController.class);

	@PostMapping("/add")
	public ResponseEntity<String> addStockPrice(@RequestBody StockPrice stockPrice) {
		stockPriceService.addStockPrice(stockPrice);
		logger.info("Add new stock::::"+stockPrice);
		return new ResponseEntity<>("Added stock successfully!", HttpStatus.CREATED);
	}
	
	@GetMapping("/get/{companyCode}/{startDate}/{endDate}")
	public ResponseEntity<StockPriceDTO> fetchStockPriceList(@PathVariable("companyCode") String companyCode,
			@PathVariable("startDate") String startDate, 
			@PathVariable("endDate") String endDate) throws ParseException {
		
		StockPriceDTO stockPriceDTO = stockPriceService.fetchStockPriceList(companyCode, new SimpleDateFormat("yyyy-MM-dd").parse(startDate), new SimpleDateFormat("yyyy-MM-dd").parse(endDate));
		logger.info("Fetch stock details::::"+stockPriceDTO);
		return new ResponseEntity<>(stockPriceDTO, HttpStatus.OK);
	}
	

}
