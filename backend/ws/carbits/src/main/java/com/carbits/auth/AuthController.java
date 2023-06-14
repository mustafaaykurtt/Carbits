package com.carbits.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carbits.configuration.CarbitsUserDetails;
import com.carbits.user.User;
import com.carbits.user.UserRepository;

@RestController
public class AuthController {
	
	@Autowired
	UserRepository userRepository;

	@PostMapping("/api/1.0/auth")
	public ResponseEntity<?> handleAuthentication() {
		CarbitsUserDetails userDetails = (CarbitsUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String mail = userDetails.getMail();
		User inDB = userRepository.findByMail(mail);

		return ResponseEntity.ok(inDB);
	}

}
