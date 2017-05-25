package com.kiddo;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class Activity {
	// TODO: Add spring data validator (http://www.baeldung.com/spring-data-rest-validators)
	@Id
	private String activityId;
	private String name;
	private String description;
	private boolean isSeasonal;
	private Long startDate;
	private Long endDate;
	private String ageRange;
	private BigDecimal cost;
	private Address address;
	private List<String> categories;
	private Set<OpenHours> openHours;
	private GeoJsonPoint location;

}
