package com.kiddo;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class Activity {
	// TODO: Add spring data validator (http://www.baeldung.com/spring-data-rest-validators)
	@Id
	private String activityId;
	private String title;
	private String description;
	private boolean isSeasonal;
	private Long startDate;
	private Long endDate;
	private List<String> daysOfWeek; // TODO: Use DayOfWeek enum for this (https://docs.oracle.com/javase/tutorial/datetime/iso/enum.html)
	private String startTime;
	private String endTime;
	private List<String> ageRanges;
	private BigDecimal cost;
	private Address address;
	private List<String> categories;
}
