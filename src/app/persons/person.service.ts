import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PersonService {
  persons=['Sadik','Ghaffar','Mukhthar']
  addPerson(name:string){
    this.persons.push(name)
  }
}

