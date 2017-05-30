package com.kiddo.persistence;

import org.springframework.data.repository.CrudRepository;

import com.kiddo.model.AgeRange;

public interface AgeRangeRepository extends CrudRepository<AgeRange, String> {

}
