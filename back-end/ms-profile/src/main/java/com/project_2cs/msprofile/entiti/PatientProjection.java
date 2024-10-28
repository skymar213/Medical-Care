package com.project_2cs.msprofile.entiti;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "p1", types = Patient.class)
public interface PatientProjection {
    public String getNom();


}
