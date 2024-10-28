package com.project_2cs.msrechavancee.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MedecinDTO {

    private String nom;

    private String prenom;
    @Setter
    @Getter
    private String specialite;

    private String wilaya;
    private Double latitude;
    private Double longitude;
    private Double distance;

    // Constructor
    public MedecinDTO( String nom, String prenom,String wilaya, String specialite, Double latitude, Double longitude, Double distance) {
        this.nom = nom;
        this.prenom = prenom;
        this.wilaya = wilaya;
        this.specialite = specialite;
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = distance;
    }

    // Getters and setters



    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getDistance() {
        return distance;
    }


}
