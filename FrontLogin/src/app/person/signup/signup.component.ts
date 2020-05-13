import { AuthService } from './../../shared/service/auth.service';
import { Person } from './../../shared/models/person.model';
import { PersonService } from './../../shared/service/person.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService, private auth: AuthService) { }

  person: Person;
  invalidInputs = false;
  somethingNull = false;

  ngOnInit(): void {
    this.person = new Person();
  }

  onSubmit() {
    console.log(this.person);
    this.personService
    .createPerson(this.person)
    .subscribe(res => {
      if (res !== null) {
        this.auth.authenticate(this.person, () => {
          this.goToList();
        });
      }
    });
  }

  goToList() {
    this.router.navigate(['person/list']);
  }

}
