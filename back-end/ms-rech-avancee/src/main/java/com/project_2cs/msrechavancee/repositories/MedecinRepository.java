    package com.project_2cs.msrechavancee.repositories;

    import com.project_2cs.msrechavancee.entities.Medecin;
    import lombok.NoArgsConstructor;
    import org.springframework.context.annotation.Bean;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.data.rest.core.annotation.RepositoryRestResource;


    import java.util.List;

    @RepositoryRestResource
    public interface MedecinRepository extends JpaRepository<Medecin, Long> {
        List<Medecin> findByLatitudeIsBetweenAndLongitudeIsBetween(double minLat, double maxLat, double minLon, double maxLon);
    }
