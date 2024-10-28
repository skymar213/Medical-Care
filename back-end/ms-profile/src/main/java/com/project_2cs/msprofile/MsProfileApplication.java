package com.project_2cs.msprofile;

import com.project_2cs.msprofile.reps.resPatient;
import com.project_2cs.msprofile.reps.resmedecin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MsProfileApplication implements CommandLineRunner {

	@Autowired
	resPatient respat;


	@Autowired
	resmedecin resmed;
	public static void main(String[] args) {
		SpringApplication.run(MsProfileApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception{



	}
}
