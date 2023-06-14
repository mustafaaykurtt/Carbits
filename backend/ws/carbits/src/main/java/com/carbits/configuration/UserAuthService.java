package com.carbits.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.carbits.user.User;
import com.carbits.user.UserRepository;

@Service
public class UserAuthService implements UserDetailsService {
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
		User inDB = userRepository.findByMail(mail);
		if(inDB == null) {
			throw new UsernameNotFoundException("User not found");
		}
		return new CarbitsUserDetails(inDB);
	}

}
