package com.carbits.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "{carbits.constraints.username.NotNull.message}")
	@Size(min = 4 , max = 255)
	private String username;
	
	@NotNull
	@Email( message = "{carbits.constraint.mail.Pattern.message}")
	@UniqueUserMail
	private String mail;
	
	@NotNull
	@Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{carbits.constraint.password.Pattern.message}")
	@Size(min = 8 , max = 255)
	private String password;
	
	
}
