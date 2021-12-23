import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BaiTap1Module } from './TrainingAngulars/BaiTap1/bai-tap1.module';
import { DataBindingModule } from './TrainingAngulars/DataBinding/data-binding.module';

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
  ],
  providers: [], // Chức những class service
  bootstrap: [AppComponent], // chứa các component được chạy trên file index.html
})
export class AppModule {}
