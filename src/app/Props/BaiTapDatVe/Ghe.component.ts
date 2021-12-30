import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-ghe",
  template: `<button [ngClass]="{ gheDaDat: ghe.TrangThai }" class="ghe">
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
    `,
  ],
})
export class GheComponent implements OnInit {
  @Input() ghe: Ghe = new Ghe();
  constructor() {}

  ngOnInit() {}
}

class Ghe {
  SoGhe: number = 1;
  TenGhe: string = "";
  Gia: number = 100;
  TrangThai: boolean = false;
}
