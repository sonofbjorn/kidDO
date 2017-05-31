package com.kiddo.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kiddo.model.AddressState;

@RestController
@RequestMapping("/addressStates")
public class AddressStateController {
	@RequestMapping(method = RequestMethod.GET)
	public List<String> getAll() {
		final List<String> stateList = new ArrayList<>();
		
		for (AddressState state : AddressState.values()) {
			stateList.add(state.getUnabbreviated());
		}
		
		return stateList;
	}
}
