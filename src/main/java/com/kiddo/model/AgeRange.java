package com.kiddo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class AgeRange {
	@Id
	private String ageRangeId;
	private int order;
	private String name;
}
