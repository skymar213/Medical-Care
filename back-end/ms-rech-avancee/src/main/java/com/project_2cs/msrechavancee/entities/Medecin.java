package com.project_2cs.msrechavancee.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_medecin;

    @Setter
    @Getter
    private String date_naissance;

    @Setter
    @Getter
    private Double latitude;

    @Setter
    @Getter
    private Double longitude;

    @Setter
    @Getter
    private String nom;

    @Setter
    @Getter
    private String prenom;

    @Setter
    @Getter
    private String specialite;

    @Setter
    @Getter
    private String wilaya;

    @Setter
    @Getter
    private String password;

    @Setter
    @Getter
    private String email;

    @Setter
    @Getter
    private Double distance;

    // Constructors
    public Medecin() {}

    public Medecin(Long id_medecin, String date_naissance, Double latitude, Double longitude, String nom,
                   String prenom, String specialite, String wilaya, String password, String email) {
        this.id_medecin = id_medecin;
        this.date_naissance = date_naissance;
        this.latitude = latitude;
        this.longitude = longitude;
        this.nom = nom;
        this.prenom = prenom;
        this.specialite = specialite;
        this.wilaya = wilaya;
        this.password = password;
        this.email = email;

    }

    // Getters and Setters for other fields
}
