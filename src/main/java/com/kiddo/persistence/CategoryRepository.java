package com.kiddo.persistence;

import org.springframework.data.repository.CrudRepository;

import com.kiddo.model.Category;

public interface CategoryRepository extends CrudRepository<Category, String> {

}
