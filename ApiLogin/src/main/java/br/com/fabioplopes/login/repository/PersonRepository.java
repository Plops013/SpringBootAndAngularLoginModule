package br.com.fabioplopes.login.repository;

import br.com.fabioplopes.login.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long>{
	
	public Person findByEmail(String email);

}
