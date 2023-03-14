import { Component,EventEmitter,Output } from "@angular/core";

@Component({
  selector: "app-person-input",
  templateUrl: "./person-input.component.html",
  styleUrls: ["./person-input.component.css"]
})
export class PersonInputComponent{
  @Output() PersonCreate = new EventEmitter<string>();
  enterpersonName="";
  onPersonCreate() {
    window.alert(`Created ${this.enterpersonName} sucessfully`)
    this.PersonCreate.emit(this.enterpersonName); 
    this.enterpersonName = '';
  }
}
