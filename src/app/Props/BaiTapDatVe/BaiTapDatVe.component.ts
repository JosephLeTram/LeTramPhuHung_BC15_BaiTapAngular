import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import * as _ from "lodash";
import { GheComponent } from "./Ghe.component";

@Component({
  selector: "app-dat-ve",
  template: `<div class="container">
    <div class="row">
      <div class="col-6">
        <h3 class="text-center">Bài tập Đặt Vé Xe</h3>
        <button class="btn btn-dark w-100">Tài Xế</button>
        <app-ghe
          *ngFor="let ghe of mangGhe; let i = index"
          [ghe]="ghe"
          (clickDatGhe)="datGhe($event)"
        ></app-ghe>

        <br *ngIf="(i + 1) % 4 === 0" />
      </div>
      <div class="col-6">
        <h3>Danh sách ghế đã đặt</h3>
        <p *ngFor="let gheDangDat of mangGheDangChon">
          Ghế Số: {{ gheDangDat.SoGhe }}
          <span
            class="text-danger"
            style="cursor:pointer"
            (click)="huyGhe(gheDangDat)"
            >[Hủy]</span
          >
        </p>
      </div>
    </div>
  </div>`,
})
export class BaiTapDatVeComponent implements OnInit {
  i: number = 0;
  mangGhe: Ghe[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },
    { SoGhe: 36, TenGhe: "số 36", Gia: 100, TrangThai: true },
  ];

  mangGheDangChon: Ghe[] = [];

  datGhe(gheDangDat: Ghe) {
    // Kiếm tra khi click vào có dữ liệu ghế trong mảng đang đặt thì xóa đi, nếu chưa có thì thêm vào
    let index = this.mangGheDangChon.findIndex(
      (gheDD) => gheDD.SoGhe === gheDangDat.SoGhe
    );
    if (index != -1) {
      this.mangGheDangChon.splice(index, 1);
    } else {
      this.mangGheDangChon.push(gheDangDat);
    }

    // Sắp xếp ghế lại
    // this.mangGheDangChon = this.mangGheDangChon.sort(
    //   (gheTiepTheo: Ghe, ghe: Ghe) => {
    //     return gheTiepTheo.SoGhe - ghe.SoGhe;
    //   }
    // );

    this.mangGheDangChon = _.sortBy(this.mangGheDangChon, ["SoGhe"]);
  }
  @ViewChildren(GheComponent) dsAppGhe!: QueryList<GheComponent>;
  huyGhe(gheHuy: Ghe) {
    this.mangGheDangChon = this.mangGheDangChon.filter(
      (gheDD) => gheDD.SoGhe !== gheHuy.SoGhe
    );
    // xử lý dom đến app-ghe tìm ra ghế hủy
    this.dsAppGhe.forEach((gheCon: GheComponent, index: number) => {
      if (gheCon.ghe.SoGhe === gheHuy.SoGhe) {
        gheCon.dangDat = false;
      }
    });
    // Tìm ra <app-gh> bấm hủy trên nhiều thẻ <app-ghe> thông qua thuộc tính @InputGhe của mỗi thẻ <app-ghe>
    // let GheComponentHuy: GheComponent | undefined = this.dsAppGhe.find(
    //   (gheCom: GheComponent) => gheCom.ghe.SoGhe === gheHuy.SoGhe
    // );
    // if (GheComponentHuy) {
    //   GheComponentHuy.dangDat = false;
    // }
  }
  // Dom Đến tất cả các thẻ <app-ghe></app-ghe> tìm ra thẻ <app-ghe> nào bấm huỷ

  constructor() {}

  ngOnInit() {}
}

interface Ghe {
  SoGhe: number;
  TenGhe: string;
  Gia: number;
  TrangThai: boolean;
}
