import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bai-tap-directive",
  template: `
    <div class="container" style="margin-bottom:200px">
      <div class="card">
        <div class="card-header bg-dark text-white font-weight-bold">
          <h3>Quản lý danh mục sản phẩm</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <p>Mã sản phẩm</p>
            <input [(ngModel)]="sp.maSanPham" class="form-control" />
          </div>
          <div class="form-group">
            <p>Tên sản phẩm</p>
            <input [(ngModel)]="sp.tenSanPham" class="form-control" />
          </div>
          <div class="form-group">
            <p>Giá sản phẩm</p>
            <input [(ngModel)]="sp.giaSanPham" class="form-control" />
          </div>
          <div class="form-group">
            <button class="btn btn-outline-success" (click)="themSanPham()">
              Thêm Sản Phẩm
            </button>
          </div>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr class="bg-dark text-white font-weight-bold">
            <th>STT</th>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let sanPham of mangSanPham">
            <td>{{ sanPham.maSanPham }}</td>
            <td>{{ sanPham.tenSanPham }}</td>
            <td>
              <img
                [src]="'https://i.pravatar.cc/50' + sanPham.maSanPham"
                width="50"
                height="50"
              />
            </td>
            <td>{{ sanPham.giaSanPham }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class BaiTapDirectiveComponent implements OnInit {
  sp: SanPham = {
    maSanPham: "",
    tenSanPham: "",
    giaSanPham: "",
    hinhAnh: "",
  };

  mangSanPham: SanPham[] = [];

  themSanPham() {
    let sanPhamThem: SanPham = { ...this.sp };
    this.mangSanPham.push(sanPhamThem);
  }

  constructor() {}

  ngOnInit() {}
}

interface SanPham {
  maSanPham: string;
  tenSanPham: string;
  giaSanPham: string;
  hinhAnh: string;
}
