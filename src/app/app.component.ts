import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tên  selector của thẻ
  templateUrl: './app.component.html', //Template url là đường dẫn đi đến file html
  styleUrls: ['./app.component.scss'], // Đường dẫn đi đến file chứa css chỉ áp dụng trên component thôi
})
export class AppComponent {
  // Phần xử lý Javascript hành động người dùng

  title = 'LeTramPhuHung_BC15_BaiTapAngular';
}
