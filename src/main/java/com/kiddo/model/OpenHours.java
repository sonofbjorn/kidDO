package com.kiddo.model;

import java.time.DayOfWeek;
import java.time.LocalTime;

import lombok.Data;

@Data
public class OpenHours {
	private DayOfWeek day;
	private LocalTime open;
	private LocalTime close;


	public void setOpen(String time) {
		this.open = LocalTime.parse(time);
	}
	
	public void setClose(String time) {
		this.close = LocalTime.parse(time);
	}
}
