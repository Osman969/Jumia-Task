package com.customers.sqllite.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.HashMap;
import java.util.Map;


@Configuration
public class GeneralConfiguration {

    private Map<String, String> countries;

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean(name = "populateCountries")
    public Map<String, String> populateCountries(){
        countries = new HashMap<>();
        countries.put("Cameroon", "(237)");
        countries.put("Ethiopia", "(251)");
        countries.put("Morocco", "(212)");
        countries.put("Mozambique", "(258)");
        countries.put("Uganda", "(256)");
        return  countries;
    }

}
