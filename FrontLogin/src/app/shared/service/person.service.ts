import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/person/';
   }

   public createPerson(person: Person): Observable<Person>{
    return this.http.post<Person>(this.url, person);
   }

   public getAllPersons(): Observable<Person[]>{
     return this.http.get<Person[]>(this.url, {headers: { 'Authorization': sessionStorage.getItem('Authorization')}});
   }

}
