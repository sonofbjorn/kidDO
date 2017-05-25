package com.kiddo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.GeoResult;
import org.springframework.data.geo.GeoResults;
import org.springframework.data.geo.Metrics;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("activities")
public class ActivityController {
	
	private static final int DEFAULT_MAX_DISTANCE_MILES = 200;
	
	@Autowired
	ActivityRepository activityRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Activity> getAll() {
		return (List<Activity>) activityRepository.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Activity createActivity(@RequestBody Activity activity) {
		return activityRepository.save(activity);
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public Activity getActivityById(@PathVariable String id) {
		return activityRepository.findOne(id);
	}
	
	@RequestMapping(path = "/bylocation", method = RequestMethod.GET)
	public List<GeoResult<Activity>> getActivitiesByLocation(@RequestParam double latitude, @RequestParam double longitude) {
		final GeoJsonPoint searchLocation = new GeoJsonPoint(longitude, latitude);
		final Distance maxDistance = new Distance(DEFAULT_MAX_DISTANCE_MILES, Metrics.MILES);
		return activityRepository.findByLocationNear(searchLocation, maxDistance).getContent();
	}
}
