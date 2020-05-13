import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8080';
   }

  authenticate(person: Person, callback: () => void){
    this.http.post(
    (this.url + '/login'),
    person,
    { observe: 'response'} )
    .subscribe(
      data => {
        sessionStorage.setItem('Authorization', data.headers.get('Authorization'));
        sessionStorage.setItem('email', person.email);
        callback();
      }
    );
  }

  getEmail(){
    return sessionStorage.getItem('email');
  }

  isAuthenticated(): boolean {
    const email = sessionStorage.getItem('email');
    return (email !== null) ? true : false;
  }

  logout() {
    console.log('Sessão esvaziada');
    sessionStorage.clear();
  }

}

