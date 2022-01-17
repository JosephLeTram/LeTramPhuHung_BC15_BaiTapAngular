import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NguoiDung } from "src/app/__core/models/NguoiDung.model";

import { NguoiDungService } from "src/app/__core/services/nguoiDung.service";


@Component({
  selector: "app-register",
  template: `<form
    class="container"
    #formDangKy="ngForm"
    (ngSubmit)="dangKy(formDangKy.value)"
  >
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh;"
    >
      <div class="w-75">
        <div class="display-4 text-center"><h3>Trang Đăng Ký</h3></div>
        <div class="form-group">
          <p>Tài khoản</p>
          <input
            class="form-control"
            id="taiKhoan"
            #taiKhoan="ngModel"
            name="taiKhoan"
            minlength="6"
            maxlength="32"
            required
            ngModel
          />
          <div *ngIf="(taiKhoan.touched || taiKhoan.dirty) && taiKhoan.errors">
            <p
              *ngIf="taiKhoan.errors['required']"
              class="alert alert-danger mt-2"
            >
              Tài Khoản không được bỏ trống!
            </p>
            <p
              *ngIf="
                taiKhoan.errors['minlength'] || taiKhoan.errors['maxlength']
              "
              class="alert alert-danger mt-2"
            >
              Tài khoản từ 6 - 32 ký tự
            </p>
          </div>
        </div>
        <div class="form-group">
          <p>Mật Khẩu</p>
          <input
            type="password"
            class="form-control"
            id="matKhau"
            name="matKhau"
            ngModel
            #matKhau="ngModel"
          />
        </div>
        <div class="form-group">
          <p>Nhập lại</p>
          <input
            type="password"
            class="form-control"
            id="nhapLai"
            name="nhapLai"
            ngModel
            #nhapLai="ngModel"
            (keyup)="confirmPass(nhapLai.value, matKhau.value)"
          />
          <p
            *ngIf="
              (nhapLai.touched ||
                matKhau.touched ||
                nhapLai.dirty ||
                matKhau.dirty) &&
              matKhau.value !== nhapLai.value
            "
            class="alert alert-danger"
          >
            Nhập lại mật khẩu không đúng!
          </p>
        </div>
        <div class="form-group">
          <p>Họ Tên</p>
          <input class="form-control" id="hoTen" name="hoTen" ngModel />
        </div>
        <div class="form-group">
          <p>Email</p>
          <input
            class="form-control"
            id="email"
            name="email"
            required
            ngModel
            #email="ngModel"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          />
          <div *ngIf="(email.touched || email.dirty) && email.errors">
            <p class="alert alert-danger mt-2" *ngIf="email.errors['required']">
              Email không được bỏ trống!
            </p>
            <p class="alert alert-danger mt-2" *ngIf="email.errors['pattern']">
              Email không đúng định dạng!
            </p>
          </div>
        </div>
        <div class="form-group">
          <p>Số điện thoại</p>
          <input
            class="form-control"
            id="soDt"
            name="soDt"
            pattern="[0-9]+"
            required
            ngModel
            #soDt="ngModel"
          />
          <div *ngIf="(soDt.touched || soDt.dirty) && soDt.errors">
            <p class="alert alert-danger mt-2" *ngIf="soDt.errors['required']">
              Số điện thoại không được bỏ trống!
            </p>
            <p class="alert alert-danger mt-2" *ngIf="soDt.errors['pattern']">
              Số điện thoại không đúng định dạng!
            </p>
          </div>
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            type="submit"
            [disabled]="formDangKy.invalid"
          >
            Đăng Ký
          </button>
          <button>Set Value</button>
        </div>
      </div>
    </div>
  </form>`,

  styles: [
    `
      input.ng-invalid {
        border: 5px solid red;
      }
      input.ng-valid {
        border: 5px solid green;
    }
    `,
  ],
})
export class RegisterComponent implements OnInit {
  nguoiDung: NguoiDung = new NguoiDung();
  @ViewChild("formDangKy") form!: NgForm;
  constructor(private nguoiDungService:NguoiDungService) {}
  
  dangKy(formValue: NguoiDung) {
    formValue["maNhom"] = "GP01";
    console.log("formValue", formValue);
    this.nguoiDungService.dangKy(formValue).subscribe((result) => {
      console.log("result", result)
    }, (error) => {
      console.log("error", {error})
    })

    
  }
  confirmPass(nhapLai: string, matKhau: string) {
    if (nhapLai !== matKhau) {
      this.form.form.controls["nhapLai"].setErrors({ nhapLai: true });
    } else {
      this.form.form.removeControl("nhapLai");
    }
  }

  

  ngOnInit() {}
}
