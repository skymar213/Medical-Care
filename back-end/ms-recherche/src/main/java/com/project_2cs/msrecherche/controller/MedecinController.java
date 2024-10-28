package com.project_2cs.msrecherche.controller;


import com.project_2cs.msrecherche.entities.medecin;
import com.project_2cs.msrecherche.repositories.medecinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/medecin")


public class MedecinController {

    private final medecinRepository medecinRepository;

    @Autowired
    public MedecinController(medecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }

    // Endpoint pour rechercher un médecin par nom
    @GetMapping("/search/findByNomM")
    public Optional<medecin> findByNomM(@RequestParam String nomM) {
        Optional<medecin> medecins = medecinRepository.findByNomM(nomM);
        return medecins;
    }

    // Endpoint pour rechercher un médecin par wilaya
    @GetMapping("/search/findByWilaya")
    public Optional<medecin> findByWilaya(@RequestParam String wilaya) {
        Optional<medecin> medecins = medecinRepository.findByWilaya(wilaya);

        return medecins;
    }


}