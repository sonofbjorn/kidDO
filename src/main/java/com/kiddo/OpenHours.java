package com.kiddo;

import java.time.DayOfWeek;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
public class OpenHours {
	@Getter @Setter private DayOfWeek day;
	private LocalTime open;
	private LocalTime close;
	private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh mm a");
	
	public String getOpen() {
		return open.format(formatter);
	}
	
	public String getClose() {
		return close.format(formatter);
	}	
	
	public void setOpen(String openTime) {
		this.open = LocalTime.parse(openTime, formatter);
	}
	
	public void setClose(String closeTime) {
		this.close = LocalTime.parse(closeTime, formatter);
	}
}
