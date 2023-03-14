import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonInputComponent } from "./persons/person-input.component";
import { PersonComponent } from "./persons/persons.component";
const routes : Routes=[{
  path: '',
  component: PersonComponent
},{path:'input', component:PersonInputComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
