import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PropsModule } from "./Props/Props.module";
import { AngularDirectiveModule } from "./TrainingAngulars/AngularDirective/AngularDirective.module";
import { BaiTap1Module } from "./TrainingAngulars/BaiTap1/bai-tap1.module";
import { DataBindingModule } from "./TrainingAngulars/DataBinding/data-binding.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { DemoUIModule } from "./DemoUIModule/DemoUIModule.module";
//Định nghĩa router
import { RouterModule, Routes } from "@angular/router";

import { Page404Component } from "./pages/Page404/Page404.component";
import { HeaderHomeComponent } from "./components/HeaderHome/HeaderHome.component";
import { HomeModule } from "./pages/HomeModule/Home.module";
import { UserModule } from "./pages/UserModule/User.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthorInterceptor } from "./__core/guards/Auth.interceptor";

const appRoutes: Routes = [
  { path: "home", loadChildren: () => HomeModule }, // /home => load ra trang home
  { path: "user", loadChildren: () => UserModule },
  { path: "", loadChildren: () => HomeModule },
  { path: "page404", component: Page404Component },
  { path: "**", redirectTo: "page404" },
];

@NgModule({
  declarations: [
    //nơi khai báo các component thuộc module này (Phải khai báo mới sử dụng được)
    AppComponent,
    DemoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule, // Nơi import các module khác của ứng dụng vào appModule
    BaiTap1Module,
    DataBindingModule,
    AngularDirectiveModule,
    PropsModule,
    NoopAnimationsModule,
    DemoUIModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthorInterceptor, multi:true}], // Chức những class service
  bootstrap: [AppComponent], // chứa các component được chạy trên file index.html
})
export class AppModule {}
