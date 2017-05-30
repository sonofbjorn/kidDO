package com.kiddo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kiddo.model.AgeRange;
import com.kiddo.persistence.AgeRangeRepository;

@RestController
@RequestMapping("ageranges")
public class AgeRangeController {
	
	@Autowired
	private AgeRangeRepository ageRangeRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	Iterable<AgeRange> getAll() {
		return ageRangeRepository.findAll();
	}
}
