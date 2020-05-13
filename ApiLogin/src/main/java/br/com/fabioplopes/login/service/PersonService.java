package br.com.fabioplopes.login.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fabioplopes.login.model.Person;
import br.com.fabioplopes.login.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository personRepository;
	
	public Person save(Person person) {
		return this.personRepository.save(person);
	}
	
	public void deleteById(long id) {
		this.personRepository.deleteById(id);
	}
	
	public Person findById(long id) {
		return this.personRepository.findById(id).get();
	}
	
	public Person findByEmail(String email) {
		return this.personRepository.findByEmail(email);
	}
	
	public List<Person> findAll(){
		return this.personRepository.findAll();
	}
	
}
