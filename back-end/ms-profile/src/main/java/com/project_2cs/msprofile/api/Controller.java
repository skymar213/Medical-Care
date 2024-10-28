package com.project_2cs.msprofile.api;


import com.project_2cs.msprofile.entiti.Medecin;
import com.project_2cs.msprofile.entiti.Patient;
import com.project_2cs.msprofile.reps.resPatient;
import com.project_2cs.msprofile.reps.resmedecin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")  // Adjust the origin as needed
public class Controller {

    @Autowired
    resPatient resPatient;
    @Autowired
    resmedecin resmed;




    //get search medecin by nom
    @GetMapping("/medecins/search")
    public List<Medecin> getMedecinByNom(@RequestParam String nom) {
        return resmed.findByNom(nom);
    }

    // search medecin by specialite
    @GetMapping("/medecins/searchSpecialite")
    public List<Medecin> getMedecinBySpecialite(@RequestParam String specialite) {
        return resmed.findBySpecialite(specialite);
    }

    //search medecin by wilaya
    @GetMapping("/medecins/searchWilaya")
    public List<Medecin> getMedecinByWilaya(@RequestParam String wilaya) {
        return resmed.findByWilaya(wilaya);
    }

    @GetMapping("/getMedecinId")
    public ResponseEntity<Long> getMedecinId(@RequestParam Long id) {
        Medecin medecin = resmed.findByIdMedecin(id);
        return ResponseEntity.ok(medecin.getIdMedecin());
    }
    //getPatientId
    @GetMapping("/getPatientId")
    public ResponseEntity<Long> getPatientId(@RequestParam Long id) {
        Patient patient = resPatient.findById(id).orElse(null);
        if (patient == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(patient.getIdPatients());
    }
    @GetMapping("/getMedecinName")
    public ResponseEntity<String> getMedecinName(@RequestParam Long id) {
        Medecin medecin = resmed.findById(id).orElse(null);
        if (medecin == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(medecin.getNom()+" "+medecin.getPrenom());
    }

    @GetMapping("/getPatientName")
    public ResponseEntity<String> getPatientName(@RequestParam Long id) {
        // Your logic to fetch the Patient name by id
        Patient patient = resPatient.findById(id).orElse(null);
        if (patient == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(patient.getNom() + " " + patient.getPrenom());
    }


    //faire un login patient avec email et password avec un post mapping
    @PostMapping("/loginPatient")
    public ResponseEntity<Patient> loginPatient(@RequestParam String email, @RequestParam String password) {
        // Chercher l'étudiant par ID
        Patient patient = resPatient.findByEmailAndPassword(email,password);

        if (patient == null) {
            // Si l'étudiant n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }

        // Retourner l'étudiant trouvé
        return ResponseEntity.ok(patient);
    }

    //faire un login medecin avec email et password avec un post mapping
    @PostMapping("/loginMedecin")
    public ResponseEntity<Medecin> loginMedecin(@RequestParam String email, @RequestParam String password) {
        // Chercher le médecin par ID
        Medecin medecin = resmed.findByEmailAndPassword(email,password);

        if (medecin == null) {
            // Si le médecin n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }

        // Retourner le médecin trouvé
        return ResponseEntity.ok(medecin);
    }


    @PostMapping("/patients")
    public ResponseEntity<Patient> addPatient(@RequestBody Patient newPatient) {
        // Enregistrer le nouvel étudiant dans la base de données
        Patient savedPatient = resPatient.save(newPatient);

        // Retourner l'étudiant enregistré avec un statut HTTP 201 (Created)
        return ResponseEntity.status(201).body(savedPatient);
    }
    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        // Récupérer tous les étudiants de la base de données
        return resPatient.findAll();
    }
    @GetMapping("/verifyIdMedecin")
    public Boolean verifyMedecin(@RequestParam Long id) {
        return resmed.findById(id).isPresent();
    }
    @GetMapping("/verifyIdPatient")
    public Boolean verifyPatient(@RequestParam Long id) {
        return resPatient.findById(id).isPresent();
    }
    @GetMapping("/medecins")
    public List<Medecin> getAllMedecin() {
        // Récupérer tous les étudiants de la base de données
        return resmed.findAll();
    }
    @GetMapping("medecins/findByLatitudeIsBetweenAndLongitudeIsBetween")
        public Flux<Medecin> getMedecinCord(){
            return Flux.fromIterable(resmed.findAll());
        }



    @PostMapping("/medecins")
    public ResponseEntity<Medecin> addMedecin(@RequestBody Medecin newMedecin) {
        // Enregistrer le nouveau médecin dans la base de données
        Medecin savedMedecin = resmed.save(newMedecin);

        // Retourner le médecin enregistré avec un statut HTTP 201 (Created)
        return ResponseEntity.status(201).body(savedMedecin);
    }
    @PutMapping("/patients/{idPatient}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long idPatient, @RequestBody Patient updatedPatient) {
        // Trouver l'étudiant par ID
        Patient existingPatient = resPatient.findById(idPatient).orElse(null);

        if (existingPatient == null) {
            // Si l'étudiant n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }

        // Mettre à jour les champs de l'étudiant existant avec les valeurs de updatedPatient
        existingPatient.setNom(updatedPatient.getNom());
        existingPatient.setPrenom(updatedPatient.getPrenom());
        existingPatient.setEmail(updatedPatient.getEmail());
        existingPatient.setPassword(updatedPatient.getPassword());
        existingPatient.setDateNaissance(updatedPatient.getDateNaissance());


        // Enregistrer les modifications dans la base de données
        resPatient.save(existingPatient);

        // Retourner l'étudiant mis à jour
        return ResponseEntity.ok(existingPatient);
    }


    @DeleteMapping("/patients/{idPatients}")
    public ResponseEntity<Void> deletePatient(@PathVariable Long idPatients) {
        // Vérifier si l'étudiant existe
        if (resPatient.existsById(idPatients)) {
            // Supprimer l'étudiant par ID
            resPatient.deleteById(idPatients);

            // Renvoyer un statut HTTP 204 (No Content)
            return ResponseEntity.noContent().build();
        } else {
            // Si l'étudiant n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/medecins/{idMedecin}")
    public ResponseEntity<Medecin> updateMedecin(@PathVariable Long idMedecin, @RequestBody Medecin updatedMedecin) {
        // Trouver le médecin par ID
        Medecin existingMedecin = resmed.findById(idMedecin).orElse(null);

        if (existingMedecin == null) {
            // Si le médecin n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }

        // Mettre à jour les champs du médecin existant avec les valeurs de updatedMedecin
        existingMedecin.setNom(updatedMedecin.getNom());


        // Enregistrer les modifications dans la base de données
        resmed.save(existingMedecin);

        // Retourner le médecin mis à jour
        return ResponseEntity.ok(existingMedecin);
    }
    @DeleteMapping("/medecins/{idMedecin}")
    public ResponseEntity<Void> deleteMedecin(@PathVariable Long idMedecin) {
        // Vérifier si le médecin existe
        if (resmed.existsById(idMedecin)) {
            // Supprimer le médecin par ID
            resmed.deleteById(idMedecin);

            // Renvoyer un statut HTTP 204 (No Content)
            return ResponseEntity.noContent().build();
        } else {
            // Si le médecin n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/medecins/{idMedecin}")
    public ResponseEntity<Medecin> getMedecinById(@PathVariable Long idMedecin) {
        // Chercher le médecin par ID
        Medecin medecin = resmed.findById(idMedecin).orElse(null);

        if (medecin == null) {
            // Si le médecin n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }

        // Retourner le médecin trouvé
        return ResponseEntity.ok(medecin);
    }

    @GetMapping("/patients/{idPatients}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long idPatients) {
        // Chercher l'étudiant par ID
        Patient patient = resPatient.findById(idPatients).orElse(null);

        if (patient == null) {
            // Si l'étudiant n'existe pas, renvoyer un statut HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }

        // Retourner l'étudiant trouvé
        return ResponseEntity.ok(patient);
    }





}
