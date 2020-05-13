package br.com.fabioplopes.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.fabioplopes.login.model.Person;

import org.springframework.security.core.userdetails.User.UserBuilder;

@Service
public class PersonLoginService implements UserDetailsService {

	@Autowired
	private PersonService personService;

	//In this case our username is the email.
	//Here we catch the info of the person and build a User
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Person person = null;
		UserBuilder builder = null;
		try {
			person = personService.findByEmail(email);
			if(person != null) {
				builder = User.withUsername(email);
				builder.password(person.getPassword());
				builder.roles("user");
			}
		} catch (Exception e) {
			throw new UsernameNotFoundException("Usu�rio n�o encontrado!");
		}
		return builder.build();
	}
}
