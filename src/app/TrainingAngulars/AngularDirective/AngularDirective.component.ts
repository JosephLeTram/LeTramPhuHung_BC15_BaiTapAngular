import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular-directive",
  template: `
    <div class="container" style="margin-bottom:500px">
      <h1>Structual Dỉrective</h1>
      <h3>*ngIf: dùng để render hoặc không render ra giao diện</h3>
      <div *ngIf="status">Hello Cybersoft</div>
      <button class="btn btn-outline-success" (click)="show()">Show</button>
      <button class="btn btn-outline-danger" (click)="hide()">Hide</button>
      <hr />

      <div class="form-group">
        <p>Nhập số</p>
        <input class="w-25 form-control" #iSo />
        <br /><br />
        <button class="btn btn-success" (click)="inSo(iSo.value)">In số</button>
        <div
          class="alert alert-success"
          *ngIf="number % 2 === 0; else noiDungElse"
        >
          {{ iSo.value }} là số chẵn
        </div>
        <!-- <div class="alert alert-success" *ngIf="number % 2 !== 0">
          {{ iSo.value }} là số lẻ
        </div> -->

        <ng-template #noiDungElse>
          <div class="alert alert-success" *ngIf="number % 2 !== 0">
            {{ iSo.value }} là số lẻ
          </div>
        </ng-template>

        <hr />
        <h3>
          *ngSwitchCase: Dùng để render ra 1 component hoặc thẻ thỏa giá trị của
          ngSwitchCase
        </h3>

        <div [ngSwitch]="dkSwitch" style="background-color:black">
          <div *ngSwitchCase="'red'" style="color:red">Red</div>
          <div *ngSwitchCase="'green'" style="color:green">green</div>
          <div *ngSwitchCase="'blue'" style="color:blue">blue</div>
          <div *ngSwitchCase="'yellow'" style="color:yellow">yellow</div>
          <div *ngSwitchDefault style="color:yellow">yellow</div>
        </div>
        <select #slColor (change)="changeColor(slColor.value)">
          <option value="red">Red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
      </div>

      <hr />
      <h3>
        *ngFor: Dùng để tạo giao diện dựa vào vòng lặp của một đối tượng mảng
        (không còn cách nào khác)
      </h3>
      <div class="row">
        <div *ngFor="let pro of arrProduct" class="row-4">
          <div class="card">
            <img [src]="pro.img" />
            <div class="card-body">
              <p>{{ pro.name }}</p>
              <p>{{ pro.price }}</p>
              <button class="btn btn-outline-success">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <table class="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngIf="arrProduct">
            <tr
              [ngClass]="{ 'bg-dark text-white': i % 2 == 0 }"
              *ngFor="let pro of arrProduct; let i = index"
            >
              <td>{{ i + 1 }}</td>
              <td>{{ pro.id }}</td>
              <td><img [src]="pro.img" width="50" height="50" /></td>
              <td>{{ pro.name }}</td>
              <td>{{ pro.price }}</td>
              <button class="btn btn-danger">Delete</button>
            </tr>
          </ng-container>
          <ng-container *ngIf="!arrProduct">
            <tr>
              <td colspan="6">Không có dữ liệu</td>
            </tr>
          </ng-container>
        </tbody>
      </table>

      <hr />
      <h3>ng-content</h3>
      <app-children>
        <h3 class="text-danger title">Cybersoft</h3>
        <button class="btn btn-outline-danger btnSearch">Search</button>
      </app-children>

      <hr />
      <h3>*ngStyle</h3>
      <div [ngStyle]="{ 'font-size': fontSize + 'px' }">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere
        distinctio incidunt delectus! Tempora vitae dignissimos eius
        consequatur! Excepturi soluta impedit debitis recusandae pariatur
        molestiae nobis veritatis commodi. Dolorum, earum?
      </div>
      <button class="btn btn-outline-primary" (click)="tangGiam(1)">+</button>
      <button class="btn btn-outline-primary" (click)="tangGiam(-1)">-</button>

      <hr />
      <h3>Bài tập: Directive quản lý sản phẩm</h3>
      <app-bai-tap-directive></app-bai-tap-directive>
    </div>
  `,
})
export class AngularDirectiveComponent implements OnInit {
  dkSwitch: string = "red";

  status: boolean = true;
  fontSize: number = 12;
  number: number = 0;

  arrProduct: any = [
    {
      id: "1",
      name: "IphoneX",
      price: 12000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: "2",
      name: "IphoneXI",
      price: 12000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: "3",
      name: "IphoneXII",
      price: 12000,
      img: "https://picsum.photos/200/200",
    },
  ];
  tangGiam(size: number) {
    this.fontSize += size;
  }
  inSo(iSo: string) {
    this.number = Number(iSo);
  }

  show = () => {
    this.status = true;
  };
  hide = () => {
    this.status = false;
  };

  changeColor(newColor: string) {
    this.dkSwitch = newColor;
  }

  constructor() {}

  ngOnInit() {}
}

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}
