package com.carbits;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.carbits.user.User;
import com.carbits.user.UserService;

@SpringBootApplication()
public class CarbitsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarbitsApplication.class, args);

	}


}
