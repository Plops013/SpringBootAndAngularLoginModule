package br.com.fabioplopes.login.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fabioplopes.login.model.Person;
import br.com.fabioplopes.login.service.PersonService;

@RestController
@RequestMapping("/api/person")
@CrossOrigin("http://localhost:4200")
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@GetMapping("")
	public List<Person> getPersons(){
		return personService.findAll();
	}
	
	@GetMapping("/{id}")
	public Person getPerson(@PathVariable("id") long id) {
		return this.personService.findById(id);
	}
	
	@PostMapping("/")
	public Person createPerson(@Valid @RequestBody Person person, HttpServletRequest request) {
		
		if ( personService.findByEmail(person.getEmail()) != null ) {
			return null;
		}
		
		PasswordEncoder passEncoder = new BCryptPasswordEncoder();
		String hashedPass = passEncoder.encode(person.getPassword());
		person.setPassword(hashedPass);

		return this.personService.save(person);
	}
	
	@PutMapping("/")
	public Person updatePerson(@RequestBody Person person) {
		Person oldPerson = personService.findByEmail(person.getEmail());
		oldPerson.setEmail(person.getEmail());
		oldPerson.setPassword(hashPass(person.getPassword()));
		return this.personService.save(oldPerson);
	}
	
	private String hashPass(String password) {
		PasswordEncoder passEncoder = new BCryptPasswordEncoder();
		String hashedPass = passEncoder.encode(password);
		return hashedPass;
	}
}
