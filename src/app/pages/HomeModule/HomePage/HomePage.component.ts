import { Component, OnInit } from "@angular/core";
import { PhimModel } from "src/app/__core/models/Phim.model";
import { PhimService } from "src/app/__core/services/phim.service";

@Component({
  selector: "app-home-page",
  template: `<div class="container">
    <h3>Danh Sách Phim</h3>
    <div class="row">
      <div class="col-4" *ngFor="let phim of dsPhim; let i = index">
        <div class="card mt-2">
          <img [src]="phim.hinhAnh" alt="..." />
          <div class="card-body">
            <p>{{ phim.tenPhim }}</p>
            <p>{{ phim.moTa }}</p>
            <a
              class="btn btn-success mr-2"
              [routerLink]="['/detail', phim.maPhim]"
              >Xem Chi Tiết</a
            >
            <button
              class="btn btn-primary"
              routerLink="/detail/{{ phim.maPhim }}"
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class HomePageComponent implements OnInit {
  dsPhim: PhimModel[] = [];

  // DI : Dependency Injection
  constructor(private phimService: PhimService) {}

  ngOnInit() {
    //Component dismount
    this.phimService.getAPIPhim().subscribe(
      (result: any) => {
        this.dsPhim = result.content;
        console.log("result", result);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
