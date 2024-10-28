package com.esisba.msgestionRdv.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@ToString
public class Dossier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idD;

    @Column(length = 500, nullable = false)
    private String maladie;

    @Column(length = 500, nullable = false)
    private String traitement;

    private String firstName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rdv_id")
    private rdv rdv;
}