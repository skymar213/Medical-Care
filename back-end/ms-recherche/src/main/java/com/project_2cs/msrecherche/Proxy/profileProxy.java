package com.project_2cs.msrecherche.Proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@FeignClient(name = "ms-profile")
public interface profileProxy {
    @GetMapping("api/profile/verifyIdMedecin")
    public Boolean verifyMedecin(@RequestParam Long id);

    @GetMapping("api/profile/verifyIdPatient")
    public Boolean verifyPatient(@RequestParam Long id);

    @GetMapping("api/profile/getMedecinName")
    public String getMedecinName(@RequestParam Long id);

    @GetMapping("api/profile/getPatientName")
    public String getPatientName(@RequestParam Long id);
}

