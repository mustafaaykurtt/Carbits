package com.carbits.user;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueUserMailValidator implements ConstraintValidator<UniqueUserMail, String> {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public boolean isValid(String mail, ConstraintValidatorContext context) {
		
		User user = userRepository.findByMail(mail);
		if(user != null) {
			return false;
		}
		return true;
	}

}
