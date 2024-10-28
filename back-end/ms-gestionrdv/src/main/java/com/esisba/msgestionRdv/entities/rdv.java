package com.esisba.msgestionRdv.entities;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@ToString
public class rdv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idr;


    @Temporal(TemporalType.DATE)
    private Date date;

    private String heure;

    private String etat = "en attente";

    private String description;

    private Long medecinId;

    private Long idPatient;

    @OneToMany(mappedBy = "rdv", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Dossier> dossiers;





}
