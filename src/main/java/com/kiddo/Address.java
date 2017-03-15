package com.kiddo;

import lombok.Data;

@Data
public class Address {
	private String streetAddress;
	private String city;
	private AddressState state;
	private String postalCode;
}
