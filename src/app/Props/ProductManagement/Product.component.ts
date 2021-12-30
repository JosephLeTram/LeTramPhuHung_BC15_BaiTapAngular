import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product",
  template: `<div>
    <div class="card">
      <img [src]="product.img" alt="..." />
      <div class="card-body">
        <p>STT: {{ product.id }}</p>
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <button
          class="btn btn-success"
          data-toggle="modal"
          data-target="#modelId"
          (click)="muaHang()"
        >
          Mua hàng
        </button>
      </div>
    </div>
  </div>`,
})
export class ProductComponent implements OnInit {
  // Giống this.props.tenProp
  // Input chỉ nhận dữ liệu: mảng , chuỗi, object, string, boolen, number,.... (không nhận hàm và component)
  @Input() product: Product = new Product();

  @Output() eventMuaHang = new EventEmitter();
  muaHang() {
    // emit dùng để đưa giá trị ra ngoài (nơi sử dụng thẻ này <app-product></app-product>)

    let objectOutput = {
      productImage: this.product.img,
      productName: this.product.name,
    };
    this.eventMuaHang.emit(objectOutput);
  }

  constructor() {}

  ngOnInit() {}
}
class Product {
  id = "";
  name = "";
  price = 0;
  img = "";
}
