package com.kiddo;

import org.springframework.data.geo.Distance;
import org.springframework.data.geo.GeoResults;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.repository.Near;
import org.springframework.data.repository.CrudRepository;

public interface ActivityRepository extends CrudRepository<Activity, String> {
	// Had to manually annotate the @Near param bc SpringDataMongo was not detecting the param index
	// Resulting error: "IllegalArgumentException: Point must not be null!"
	GeoResults<Activity> findByLocationNear(@Near GeoJsonPoint location, Distance distance);

}
