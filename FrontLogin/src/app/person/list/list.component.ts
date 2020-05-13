import { Person } from './../../shared/models/person.model';
import { PersonService } from './../../shared/service/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private personService: PersonService) { }

  persons: Person[];

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe(
      data => {
        console.log(data);
        this.persons = data;
      }
    );
  }

}
