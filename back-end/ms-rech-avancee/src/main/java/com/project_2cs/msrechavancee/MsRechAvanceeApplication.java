package com.project_2cs.msrechavancee;

import com.project_2cs.msrechavancee.entities.Medecin;
import com.project_2cs.msrechavancee.repositories.MedecinRepository;
import jakarta.annotation.Resource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;


@SpringBootApplication
@EnableFeignClients
public class MsRechAvanceeApplication implements CommandLineRunner {

    @Resource
    MedecinRepository medecinRepository;


    public static void main(String[] args) {
        SpringApplication.run(MsRechAvanceeApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {



    }
}


