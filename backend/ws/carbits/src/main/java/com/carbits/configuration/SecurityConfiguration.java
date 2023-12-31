package com.carbits.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

 
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled=true)
public class SecurityConfiguration {
 
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	  
    http.csrf().disable();
    http.exceptionHandling().authenticationEntryPoint(new AuthEntryPoint()); 	
	
    http.headers().frameOptions().disable();
    
    http.
    	authorizeHttpRequests()
			.requestMatchers(HttpMethod.POST, "/api/1.0/auth").authenticated()
			.and()															
		.authorizeHttpRequests()						
			.anyRequest()								
			.permitAll();								
 
    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); 
    
    
    return http.build();
  }
 
  @Bean
  public PasswordEncoder passwordEncoder() {	
    return new BCryptPasswordEncoder();
  }
  
  
  
 
}
