import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-ghe",
  template: `<button
      [disabled]="ghe.TrangThai"
      [ngClass]="{ gheDaDat: ghe.TrangThai, gheDangDat: dangDat }"
      class="ghe"
      (click)="datGhe()"
    >
      {{ ghe.SoGhe }}
    </button>

    <ng-content></ng-content> `,
  styles: [
    `
      .ghe {
        color: white;
        background-color: gray;
        width: 35px;
        height: 35px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 15px;
      }

      .gheDaDat {
        background-color: red;
        cursor: no-drop;
      }

      .gheDangDat {
        background-color: green !important;
      }
    `,
  ],
})
export class GheComponent implements OnInit {
  @Input() ghe: Ghe = new Ghe();
  @Output() clickDatGhe = new EventEmitter();

  dangDat: boolean = false;
  constructor() {}

  ngOnInit() {}

  datGhe() {
    this.dangDat = !this.dangDat;
    this.clickDatGhe.emit(this.ghe);
  }
}

class Ghe {
  SoGhe: number = 1;
  TenGhe: string = "";
  Gia: number = 100;
  TrangThai: boolean = false;
}
