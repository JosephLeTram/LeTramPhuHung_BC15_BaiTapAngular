import { Component, OnInit } from "@angular/core";
import { UserLogin } from "src/app/__core/models/UserLogin.model";
import { NguoiDungService } from "src/app/__core/services/nguoiDung.service";

@Component({
  selector: "app-login",
  template: `<div class="container">
    <form
      #frmLogin="ngForm"
      (ngSubmit)="dangNhap(frmLogin.value)"
      class="d-flex justify-content-center align-items-center"
      style="height:100vh;"
    >
      <div>
        <h3>Login</h3>
        <div class="form-group">
          <p>Tài Khoản</p>
          <input class="form-control" name="taiKhoan" ngModel />
        </div>
        <div class="form-group">
          <p>Mật Khẩu</p>
          <input class="form-control" name="matKhau" ngModel />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success">Đăng nhập</button>
        </div>
      </div>
    </form>
  </div>`,
})
export class LoginComponent implements OnInit {
  constructor(private nguoiDungService: NguoiDungService) {}

  dangNhap(userLogin: UserLogin) {
    this.nguoiDungService.dangNhap(userLogin).subscribe(
      (result) => {
        localStorage.setItem("userLogin", JSON.stringify(result.content));
        localStorage.setItem("accessToken", result.accessToken);
      },
      (err) => {
        console.log({ err });
      }
    );
  }
  ngOnInit() {}
}
