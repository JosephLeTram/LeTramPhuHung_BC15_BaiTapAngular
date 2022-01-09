import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeTemplateComponent } from "src/app/HomeTemplate/HomeTemplate.component";
import { ContactComponent } from "./Contact/Conctact.component";
import { HomePageComponent } from "./HomePage/HomePage.component";
import { LoginComponent } from "./Login/Login.component";
import { RegisterComponent } from "./Register/Register.component";

//Định nghĩa router cho component load ra mặc định của module tại đay
import { Routes, RouterModule } from "@angular/router";
import { HeaderHomeComponent } from "src/app/components/HeaderHome/HeaderHome.component";
import { DetailComponent } from "./DetailPage/Detail.component";

const homeRoutes: Routes = [
  {
    path: "",
    component: HomeTemplateComponent,
    children: [
      { path: "", component: HomePageComponent },
      { path: "detail/:maPhim", component: DetailComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "contact", component: ContactComponent },
    ],
  },
]; //Mặc định

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(homeRoutes)],

  declarations: [
    HomePageComponent,
    ContactComponent,
    HomeTemplateComponent,
    HeaderHomeComponent,
    DetailComponent,
  ],
})
export class HomeModule {}
