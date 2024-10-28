package com.esisba.msgestionRdv.controller;

import com.esisba.msgestionRdv.dto.DossierReq;
import com.esisba.msgestionRdv.dto.DossierRes;
import com.esisba.msgestionRdv.dto.rdvReq;
import com.esisba.msgestionRdv.dto.rdvRes;
import com.esisba.msgestionRdv.services.RdvService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rdv")

public class rdvController {

    private final RdvService rdvService;

    public rdvController(RdvService rdvService) {
        this.rdvService = rdvService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createRdv(@RequestBody rdvReq rdvReq) {
        rdvService.createRdv(rdvReq);
        return ResponseEntity.status(HttpStatus.CREATED).body("Rendez-vous créé avec succès.");
    }

    //delete rdv by id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRdv(@PathVariable Long id) {
        rdvService.deleteRdv(id);
        return ResponseEntity.ok().body("Rendez-vous supprimé avec succès.");
    }
    //DONNER UNE FONCTION GET MAPPING POUR RECUPER LE ID DU MEDECIN ET ID PATIENT ET DATE

    //Donner une fonction get mapping pour recuperer les rendez-vous d'un patient par id
    @GetMapping("/patient/{idPatient}")
    public ResponseEntity<List<rdvRes>> getRdvsByPatientId(@PathVariable Long idPatient) {
        List<rdvRes> rdvs = rdvService.getRdvsByPatientId(idPatient);
        return ResponseEntity.ok().body(rdvService.getRdvsByPatientId(idPatient));
    }

    //Donner une fonction get mapping pour recuperer les rendez-vous d'un MEDECIN par id
    @GetMapping("/medecin/{idMedecin}")
    public ResponseEntity<List<rdvRes>> getRdvsByMedecinId(@PathVariable Long idMedecin) {
        List<rdvRes> rdvs = rdvService.getRdvsByMedecinId(idMedecin);
        return ResponseEntity.ok().body(rdvService.getRdvsByMedecinId(idMedecin));
    }


    @PostMapping("/dossier/create")
    public ResponseEntity<String> createDossier(@RequestBody DossierReq dossierReq) {
        rdvService.createDossier(dossierReq);
        return ResponseEntity.status(HttpStatus.CREATED).body("Dossier médical créé avec succès.");
    }

    @PutMapping("/dossier/update/{dossierId}")
    public ResponseEntity<String> updateDossier(@PathVariable Long dossierId, @RequestBody DossierReq dossierReq) {
        rdvService.updateDossier(dossierId, dossierReq);
        return ResponseEntity.status(HttpStatus.OK).body("Dossier médical mis à jour avec succès.");
    }

    //set etat rdv by id
    @PutMapping("/etat/{id}")
    public ResponseEntity<String> setEtatRdv(@PathVariable Long id, @RequestParam String etat) {
        rdvService.setEtatRdv(id, etat);
        return ResponseEntity.ok().body("Etat du rendez-vous mis à jour avec succès.");
    }

    //get etat rdv by id rdv

    @GetMapping("/etat/{id}")
    public ResponseEntity<String> getEtatRdv(@PathVariable Long id) {
        String etat = rdvService.getEtatRdv(id);
        return ResponseEntity.ok().body(etat);
    }
    //delete dossier by id
    @DeleteMapping("/dossier/delete/{id}")
    public ResponseEntity<String> deleteDossier(@PathVariable Long id) {
        rdvService.deleteDossier(id);
        return ResponseEntity.ok().body("Dossier médical supprimé avec succès.");
    }

    //set heure rdv by id
    @PutMapping("/heure/{id}")
    public ResponseEntity<String> setHeureRdv(@PathVariable Long id, @RequestParam String heure) {
        rdvService.setHeureRdv(id, heure);
        return ResponseEntity.ok().body("Heure du rendez-vous mis à jour avec succès.");
    }

    //get heure rdv by id rdv
    @GetMapping("/heure/{id}")
    public ResponseEntity<String> getHeureRdv(@PathVariable Long id) {
        String heure = rdvService.getHeureRdv(id);
        return ResponseEntity.ok().body(heure);
    }

    //set description rdv by id
    @PutMapping("/description/{id}")
    public ResponseEntity<String> setDescriptionRdv(@PathVariable Long id, @RequestParam String description) {
        rdvService.setDescriptionRdv(id, description);
        return ResponseEntity.ok().body("Description du rendez-vous mise à jour avec succès.");
    }

    //get description rdv by id rdv
    @GetMapping("/description/{id}")
    public ResponseEntity<String> getDescriptionRdv(@PathVariable Long id) {
        String description = rdvService.getDescriptionRdv(id);
        return ResponseEntity.ok().body(description);
    }

    //get dossier by id medecin
    @GetMapping("/dossier/medecin/{idMedecin}")
    public ResponseEntity<List<DossierRes>> getDossiersByMedecinId(@PathVariable Long idMedecin) {
        List<DossierRes> dossiers = rdvService.getDossiersByMedecinId(idMedecin);
        return ResponseEntity.ok().body(dossiers);
    }

    @GetMapping("/dossiers")
    public ResponseEntity<List<DossierRes>> getAllDossiers() {
        List<DossierRes> allDossiers = rdvService.getAllDossiers();
        return ResponseEntity.ok().body(allDossiers);
    }


//    @GetMapping("/all")
//    public ResponseEntity<List<rdvRes>> getAllRdv() {
//        List<rdvRes> allRdv = rdvService.getAllRdv();
//        return ResponseEntity.ok().body(allRdv);
//    }


}
