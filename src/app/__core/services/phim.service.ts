// Kết nối API => trả về dữ liệu

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PhimModel } from "../models/Phim.model";

@Injectable({ providedIn: "root" })
export class PhimService {
  constructor(private httpClient: HttpClient) {}

  public getAPIPhim(): Observable<PhimModel[]> {
    // let header: HttpHeaders = new HttpHeaders();
    // header = header.set(
    //   "TokenCybersoft",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0"
    // );

    let ob: any = this.httpClient.get(
      "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
   
    );
    return ob;
  }

  // Gọi API Phim
  public getAPIDetail(maPhim: string): Observable<any> {
    // let header: HttpHeaders = new HttpHeaders();
    // header = header.set(
    //   "TokenCybersoft",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0"
    // );

    let ob: any = this.httpClient.get(
      `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
   
    );
    return ob;
  }
}
