package com.esisba.msgestionRdv.repositories;

import com.esisba.msgestionRdv.entities.rdv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface rdvRepository extends JpaRepository<rdv,Long> {
    List<rdv> findAllByMedecinId(Long idMedecin);
    List<rdv> findAllByIdPatient(Long idPatient);

}

