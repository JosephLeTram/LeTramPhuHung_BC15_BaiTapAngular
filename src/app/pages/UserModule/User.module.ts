import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../HomeModule/Login/Login.component";
import { RegisterComponent } from "../HomeModule/Register/Register.component";
import { UserTemplateComponent } from "./UserTemplate.component";

const userRoutes: Routes = [
  {
    path: "",
    component: UserTemplateComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(userRoutes)],

  declarations: [LoginComponent, RegisterComponent, UserTemplateComponent],
})
export class UserModule {}
