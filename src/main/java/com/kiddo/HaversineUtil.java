package com.kiddo;

public class HaversineUtil {
    public static final double R_KM = 6372.8; // Radius of the Earth in kilometers -- not used yet
    public static final double R_MI = 3959.0; // Radius of the Earth in miles
    
    public static double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        lat1 = Math.toRadians(lat1);
        lat2 = Math.toRadians(lat2);
 
        double a = Math.pow(Math.sin(dLat / 2),2) + Math.pow(Math.sin(dLon / 2),2) * Math.cos(lat1) * Math.cos(lat2);
        double c = 2 * Math.asin(Math.sqrt(a));
        return R_MI * c;
    }
}