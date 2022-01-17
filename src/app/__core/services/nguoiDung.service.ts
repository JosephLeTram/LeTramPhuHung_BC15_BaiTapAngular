import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NguoiDung } from "../models/NguoiDung.model";
import { UserLogin } from "../models/UserLogin.model";

@Injectable({ providedIn: "root" })
export class NguoiDungService {
  constructor(private httpClient: HttpClient) {}

  dangKy(nguoiDung: NguoiDung): Observable<any> {
    let ob = this.httpClient.post(
      `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      nguoiDung
    );

    return ob;
  }

  dangNhap(userLogin: UserLogin): Observable<any> {
    let ob = this.httpClient.post(
      `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      userLogin
    );

    return ob;
  }
}
