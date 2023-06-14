package com.carbits.user;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = { UniqueUserMailValidator.class })
public @interface UniqueUserMail {
	
	String message() default "{carbits.constraint.mail.UniqueUserMail.message}";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}
