package com.project_2cs.msprofile.reps;


import com.project_2cs.msprofile.entiti.Patient;
import com.project_2cs.msprofile.entiti.PatientProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface resPatient extends JpaRepository<Patient,Long>{
    List<Patient> findByDateNaissanceBefore(LocalDate date);
    List<PatientProjection> findByNom(String nom);

    Patient findByEmailAndPassword(String email, String password);
}
