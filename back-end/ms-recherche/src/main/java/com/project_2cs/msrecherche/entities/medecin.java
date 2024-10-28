package com.project_2cs.msrecherche.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@ToString
public class medecin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idM;

    @Column(length = 20,nullable = false)
    private String nomM;

    @Column(length = 10,nullable = false)
    private String wilaya;

    @Column(length = 20,unique = true)
    private String emailM;


}