package com.LOL.LOL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@SpringBootApplication
public class LolApplication {

	public static void main(String[] args) {
		SpringApplication.run(LolApplication.class, args);
	}

}
