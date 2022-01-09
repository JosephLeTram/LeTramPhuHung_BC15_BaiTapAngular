import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DetailPhim } from "src/app/__core/models/DetailPhim.model";
import { PhimService } from "src/app/__core/services/phim.service";

@Component({
  selector: "app-detail",
  template: `<div class="container">
    Movie Detail
    <img [src]="chiTietPhim.hinhAnh" />
  </div>`,
})
export class DetailComponent implements OnInit {
  chiTietPhim: DetailPhim = new DetailPhim();

  // lấy dữ liệu từ parameter
  constructor(private atv: ActivatedRoute, private phimService: PhimService) {}

  ngOnInit() {
    this.atv.params.subscribe((params: any) => {
      console.log("param", params.maPhim);
      this.layThongTinChiTietPhim(params.maPhim);
    });
  }

  layThongTinChiTietPhim(maPhim: string) {
    this.phimService.getAPIDetail(maPhim).subscribe(
      (result) => {
        this.chiTietPhim = result.content;
        console.log("result", result.content);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
