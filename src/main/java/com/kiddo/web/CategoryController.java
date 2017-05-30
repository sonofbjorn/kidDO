package com.kiddo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kiddo.model.Category;
import com.kiddo.persistence.CategoryRepository;


@RestController
@RequestMapping("categories")
public class CategoryController {

	@Autowired
	private CategoryRepository categoryRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	public Iterable<Category> getAll() {
		return categoryRepository.findAll();
	}
}
