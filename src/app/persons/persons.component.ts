import { Component, OnInit } from "@angular/core";
import { PersonService } from "./person.service";
@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html"
})
export class PersonComponent implements OnInit {
  personList: string[] = [];
  // private personService : PersonService
  constructor(private prsService:PersonService){
    // this.personService = prsService;
  }
  ngOnInit(){
    this.personList = this.prsService.persons;
  }
}
