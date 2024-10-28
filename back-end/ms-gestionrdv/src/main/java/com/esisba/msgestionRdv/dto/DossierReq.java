package com.esisba.msgestionRdv.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DossierReq {
    private Long rdvId;
    private String firstName;
    private String maladie;
    private String traitement;
}
