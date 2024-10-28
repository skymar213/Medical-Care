package com.project_2cs.msprofile.reps;



import com.project_2cs.msprofile.entiti.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import reactor.core.publisher.Flux;

import java.time.LocalDate;
import java.util.List;

@RepositoryRestResource
public interface resmedecin extends JpaRepository<Medecin,Long>{
    List<Medecin> findByDateNaissanceBefore(LocalDate date);

    //find by id
    Medecin findByIdMedecin(Long id);

    Medecin findByEmailAndPassword(String email, String password);

    List<Medecin> findByNom(String nom);

    List<Medecin> findBySpecialite(String specialite);

    List<Medecin> findByWilaya(String wilaya);
}
