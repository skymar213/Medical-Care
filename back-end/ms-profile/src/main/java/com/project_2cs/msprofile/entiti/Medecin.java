package com.project_2cs.msprofile.entiti;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
@Getter
public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMedecin;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(nullable = true)
    private LocalDate dateNaissance;

    private String specialite;

    private double latitude;

    private double longitude;

    @Column(length = 10, nullable = false)
    private String wilaya;

    @Column(unique = true)
    private String email;

    private String password;

    private  String role;
}