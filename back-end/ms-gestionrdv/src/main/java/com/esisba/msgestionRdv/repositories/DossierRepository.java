package com.esisba.msgestionRdv.repositories;

import com.esisba.msgestionRdv.entities.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface DossierRepository extends JpaRepository<Dossier, Long> {
    List<Dossier> findAllByRdv_MedecinId(Long idMedecin);
}