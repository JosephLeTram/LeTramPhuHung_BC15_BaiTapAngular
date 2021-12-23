import { NgModule } from '@angular/core';
import { BaiTap1Component } from './bai-tap1.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from './navigation.component';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    BaiTap1Component,
    HeaderComponent,
    SideBarComponent,
    NavigationComponent,
    FooterComponent,
  ], // noi khai báo các compoonent thuộc module này
  imports: [], // nơi import các module chức năng khác vào
  exports: [BaiTap1Component], // Đóng gói 1 module hoặc component nào đó cho phép file module khác sử dựng
})
export class BaiTap1Module {}
