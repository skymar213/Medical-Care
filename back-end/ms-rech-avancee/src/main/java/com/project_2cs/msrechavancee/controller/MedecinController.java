package com.project_2cs.msrechavancee.controller;

import com.project_2cs.msrechavancee.DistanceCalculator;
import com.project_2cs.msrechavancee.DTO.MedecinDTO;
import com.project_2cs.msrechavancee.entities.Medecin;
import com.project_2cs.msrechavancee.repositories.MedecinRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/medecins")
@CrossOrigin(origins = "*")  // Adjust the origin as needed
public class MedecinController {

    private final MedecinRepository medecinRepository;
    private static final Logger logger = LoggerFactory.getLogger(MedecinController.class);

    public MedecinController(MedecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }

    @GetMapping("/recherche-avancee")
    public List<MedecinDTO> rechercheAvancee(
            @RequestParam Double latitude,
            @RequestParam Double longitude,
            @RequestParam(required = false, defaultValue = "5000.0") Double distanceMax) {

        logger.info("Recherche Avancee - Latitude: {}, Longitude: {}", latitude, longitude);

        final double earthRadius = 6371;

        // Convert latitude and distance to radians
        double latitudeRad = Math.toRadians(latitude);
        double distanceRad = distanceMax / earthRadius;

        // Calculate min and max latitude
        double minLatitude = latitude - Math.toDegrees(distanceRad);
        double maxLatitude = latitude + Math.toDegrees(distanceRad);

        // Calculate min and max longitude considering the earth curvature
        double minLongitude = longitude - Math.toDegrees(distanceRad / Math.cos(latitudeRad));
        double maxLongitude = longitude + Math.toDegrees(distanceRad / Math.cos(latitudeRad));

        logger.info("Min Latitude: {}, Max Latitude: {}", minLatitude, maxLatitude);
        logger.info("Min Longitude: {}, Max Longitude: {}", minLongitude, maxLongitude);

        List<Medecin> medecins = medecinRepository.findByLatitudeIsBetweenAndLongitudeIsBetween(
                minLatitude, maxLatitude, minLongitude, maxLongitude);

        logger.info("Medecins found: {}", medecins.size());

        List<MedecinDTO> medecinDTOs = medecins.stream()
                .map(medecin -> {
                    double distance = DistanceCalculator.calculateDistance(latitude, longitude, medecin.getLatitude(), medecin.getLongitude());
                    logger.info("Medecins distance: {}", distance);
                    return new MedecinDTO( medecin.getNom(),medecin.getPrenom(),medecin.getWilaya(), medecin.getSpecialite(), medecin.getLatitude(), medecin.getLongitude(), distance);
                })
                .filter(medecinDTO -> medecinDTO.getDistance() <= distanceMax)
                .sorted(Comparator.comparingDouble(MedecinDTO::getDistance))
                .collect(Collectors.toList());

        logger.info("Filtered Medecins found: {}", medecinDTOs.size());

        return medecinDTOs;
    }
}
