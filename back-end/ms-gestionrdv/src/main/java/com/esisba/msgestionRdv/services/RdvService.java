package com.esisba.msgestionRdv.services;

import com.esisba.msgestionRdv.dto.DossierReq;
import com.esisba.msgestionRdv.dto.DossierRes;
import com.esisba.msgestionRdv.dto.rdvReq;
import com.esisba.msgestionRdv.dto.rdvRes;
import com.esisba.msgestionRdv.entities.Dossier;
import com.esisba.msgestionRdv.entities.rdv;
import com.esisba.msgestionRdv.repositories.DossierRepository;
import com.esisba.msgestionRdv.repositories.rdvRepository;
import com.esisba.msgestionRdv.Proxy.profileProxy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class RdvService {

    @Autowired
    private final rdvRepository rdvRepository;
    @Autowired
    private final profileProxy profileProxy;
    @Autowired
    private final DossierRepository dossierRepository;

    public void createRdv(rdvReq rdvReq) {
        if (profileProxy.verifyMedecin(rdvReq.getIdMedecin()) &&
                profileProxy.verifyPatient(rdvReq.getIdPatient())){

            rdv Rdv = rdv.builder()
                    .date(rdvReq.getDate())
                    .heure(rdvReq.getHeure())
                    .etat(rdvReq.getEtat())
                    .medecinId(rdvReq.getIdMedecin())
                    .description(rdvReq.getDescription())
                    .idPatient(rdvReq.getIdPatient())
                    .build();


            rdv savedRdv = rdvRepository.save(Rdv);
            log.info("Rdv {} is saved", savedRdv.getIdr());
        }else {
            log.info("erorr");

        }

    }
    public List<rdvRes> getRdvsByMedecinId(Long idMedecin) {
        List<rdv> rdvs = rdvRepository.findAllByMedecinId(idMedecin);
        return rdvs.stream().map(this::mapToRdvRes).collect(Collectors.toList());
    }


    private rdvRes mapToRdvRes(rdv rdv) {
        rdvRes rdvRes = new rdvRes();
        rdvRes.setIdr(rdv.getIdr());
        rdvRes.setEtat(rdv.getEtat());
        rdvRes.setHeure(rdv.getHeure());
        rdvRes.setDate(rdv.getDate());
        rdvRes.setDescription(rdv.getDescription());
        rdvRes.setIdMedecin(profileProxy.getMedecinId(rdv.getMedecinId()));
        rdvRes.setIdPatient(profileProxy.getPatientId(rdv.getIdPatient()));


        return rdvRes;
    }

    public void updateDossier(Long dossierId, DossierReq dossierReq) {
        Optional<Dossier> dossierOptional = dossierRepository.findById(dossierId);

        if (dossierOptional.isPresent()) {
            Dossier dossier = dossierOptional.get();
            dossier.setMaladie(dossierReq.getMaladie());
            dossier.setTraitement(dossierReq.getTraitement());

            Dossier updatedDossier = dossierRepository.save(dossier);
            log.info("Dossier {} is updated", updatedDossier.getIdD());
        } else {
            log.error("Dossier introuvable pour la mise à jour");
        }
    }

    public void createDossier(DossierReq dossierReq) {
        Optional<rdv> rdvOptional = rdvRepository.findById(dossierReq.getRdvId());

        if (rdvOptional.isPresent()) {
            rdv rdv = rdvOptional.get();

            Dossier dossier = Dossier.builder()
                    .maladie(dossierReq.getMaladie())
                    .traitement(dossierReq.getTraitement())
                    .firstName(profileProxy.getPatientName(rdv.getIdPatient()))
                    .rdv(rdv)
                    .build();

            Dossier savedDossier = dossierRepository.save(dossier);
            log.info("Dossier {} is saved", savedDossier.getIdD());
        } else {
            log.error("Rdv introuvable pour créer le dossier");
        }
    }

    public List<DossierRes> getAllDossiers() {
        List<Dossier> dossiers = dossierRepository.findAll();
        return dossiers.stream().map(this::mapToDossierRes).collect(Collectors.toList());
    }
    private DossierRes mapToDossierRes(Dossier dossier) {
        return DossierRes.builder()
                .idD(dossier.getIdD())
                .rdvId(dossier.getRdv().getIdr())
                .firstName(dossier.getFirstName())
                .maladie(dossier.getMaladie())
                .traitement(dossier.getTraitement())
                .build();
    }

    public List<rdvRes> getRdvsByPatientId(Long idPatient) {
        List<rdv> rdvs = rdvRepository.findAllByIdPatient(idPatient);
        return rdvs.stream().map(this::mapToRdvRes).collect(Collectors.toList());
    }


    //delete rdv by id
    public void deleteRdv(Long id) {
        rdvRepository.deleteById(id);
    }

    public List<DossierRes> getDossiersByMedecinId(Long idMedecin) {
        List<Dossier> dossiers = dossierRepository.findAllByRdv_MedecinId(idMedecin);
        return dossiers.stream().map(this::mapToDossierRes).collect(Collectors.toList());
    }

    //delete dossier by id
    public void deleteDossier(Long id) {
        dossierRepository.deleteById(id);
    }


    public void setEtatRdv(Long id, String etat) {
        Optional<rdv> rdvOptional = rdvRepository.findById(id);

        if (rdvOptional.isPresent()) {
            rdv rdv = rdvOptional.get();
            rdv.setEtat(etat);

            rdv updatedRdv = rdvRepository.save(rdv);
            log.info("Rdv {} is updated", updatedRdv.getIdr());
        } else {
            log.error("Rdv introuvable pour la mise à jour de l'état");
        }
    }

    public String getEtatRdv(Long id) {
        Optional<rdv> rdvOptional = rdvRepository.findById(id);

        if (rdvOptional.isPresent()) {
            rdv rdv = rdvOptional.get();
            return rdv.getEtat();
        } else {
            log.error("Rdv introuvable pour obtenir l'état");
            return null;
        }
    }

    public void setHeureRdv(Long id, String heure) {
        Optional<rdv> rdvOptional = rdvRepository.findById(id);

        if (rdvOptional.isPresent()) {
            rdv rdv = rdvOptional.get();
            rdv.setHeure(heure);

            rdv updatedRdv = rdvRepository.save(rdv);
            log.info("Rdv {} is updated", updatedRdv.getIdr());
        } else {
            log.error("Rdv introuvable pour la mise à jour de l'heure");
        }
    }

    public String getHeureRdv(Long id) {
        Optional<rdv> rdvOptional = rdvRepository.findById(id);

        if (rdvOptional.isPresent()) {
            rdv rdv = rdvOptional.get();
            return rdv.getHeure();
        } else {
            log.error("Rdv introuvable pour obtenir l'heure");
            return null;
        }
    }

    public String getDescriptionRdv(Long id) {
        Optional<rdv> rdvOptional = rdvRepository.findById(id);

        if (rdvOptional.isPresent()) {
            rdv rdv = rdvOptional.get();
            return rdv.getDescription();
        } else {
            log.error("Rdv introuvable pour obtenir la description");
            return null;
        }
    }

    public void setDescriptionRdv(Long id, String description) {
        Optional<rdv> rdvOptional = rdvRepository.findById(id);

        if (rdvOptional.isPresent()) {
            rdv rdv = rdvOptional.get();
            rdv.setDescription(description);

            rdv updatedRdv = rdvRepository.save(rdv);
            log.info("Rdv {} is updated", updatedRdv.getIdr());
        } else {
            log.error("Rdv introuvable pour la mise à jour de la description");
        }
    }


//    public List<rdvRes> getAllRdv(){
//        List<rdv> rdvs = rdvRepository.findAll();
//        return rdvs.stream().map(this::mapToRdvRes).collect(Collectors.toList());
//    }
//
//    private rdvRes mapToRdvRes(rdv rdv) {
//        rdvRes rdvRes = new rdvRes();
//        rdvRes.setIdr(rdv.getIdr());
//        rdvRes.setDate((Date) rdv.getDate());
//
//        if (rdv.getIdMedecin() != null) {
//            rdvRes.setMedecinNom(rdv.getMedecin().getNomM());
//        }
//
//        if (rdv.getIdPatient() != null) {
//            rdvRes.setPatientNom(rdv.getPatient().getNom());
//        }
//
//        return rdvRes;
//    }
}
