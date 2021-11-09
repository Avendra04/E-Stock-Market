package com.learning.cts.estockmarket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
//@EnableSwagger2
public class EstockmarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(EstockmarketApplication.class, args);
	}
	
//	@Bean
//    public Docket productApi() {
//        return new Docket(DocumentationType.SWAGGER_2)
//                .select().apis(RequestHandlerSelectors.basePackage("com.learning.cts.estockmarket.controller"))
//                .build();
//
//    }

}
