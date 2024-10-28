package com.project_2cs.msrecherche;

import com.project_2cs.msrecherche.entities.medecin;
import com.project_2cs.msrecherche.repositories.medecinRepository;
import jakarta.annotation.Resource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MsRechercheApplication implements CommandLineRunner {



	@Resource
	medecinRepository medecinRepository;


	public static void main(String[] args) {
		SpringApplication.run(MsRechercheApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

		medecin med1 = medecinRepository.save(new medecin(null,"amine","tiaret","amine@gmail.com"));

		medecin med2 = medecinRepository.save(new medecin(null,"abdelkader","Mostaganem","abdelkader@gmail.com"));

		medecin med3 = medecinRepository.save(new medecin(null,"mohamed","oran","mohamed@gmail.com"));


	}
}
