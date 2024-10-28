package com.esisba.msgestionRdv.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class rdvReq {
    private Date date;
    private Long idMedecin;
    private Long idPatient;
    private String heure;
    private String etat="en attente";
    private String description;
}
