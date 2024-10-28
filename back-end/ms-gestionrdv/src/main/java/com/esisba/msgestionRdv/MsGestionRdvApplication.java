package com.esisba.msgestionRdv;

import com.esisba.msgestionRdv.repositories.rdvRepository;
import jakarta.annotation.Resource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MsGestionRdvApplication implements CommandLineRunner {


	public static void main(String[] args) {
		SpringApplication.run(MsGestionRdvApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {


	}
}
