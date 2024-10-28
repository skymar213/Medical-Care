package com.project_2cs.msrechavancee;

public class DistanceCalculator {

    public static double calculateDistance(double lat1, double long1, double lat2, double long2) {
        return org.apache.lucene.util.SloppyMath.haversinMeters(lat1, long1, lat2, long2);
    }
}
