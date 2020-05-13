import { Router } from '@angular/router';
import { PersonService } from './../../shared/service/person.service';
import { Person } from './../../shared/models/person.model';
import { AuthService } from './../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  // invalidLogin will turned to true when the user put the wrong email or password;
  invalidLogin = false;
  person = new Person();

  ngOnInit(): void {
  }

  // call the authService to authenticate the user
  onSubmit(){
    console.log('hello to the other side');
    this.auth.authenticate(this.person, () => {
      this.goToList(); }
      );
    this.person.password = '';
    this.invalidLogin = (this.auth.isAuthenticated) ? true : false;
  }

  // Redirect to list of persons after authenticate login
  goToList() {
    this.router.navigate(['person/list']);
  }


}

