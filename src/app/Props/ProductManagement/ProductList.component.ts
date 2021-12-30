import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ProductComponent } from "./Product.component";

@Component({
  selector: "app-product-list",
  template: `<div>
    <h3 class="text-center">Danh sách sản phẩm</h3>

    <button class="btn btn-danger" (click)="giamGia()">Giảm giá</button>
    <div class="row">
      <div class="col-4" *ngFor="let product of arrProduct">
        <span class="badge badge-danger" *ngIf="status">20%</span>
        <app-product
          [product]="product"
          (eventMuaHang)="clickMuaHang($event)"
        ></app-product>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ modalContent.productName }}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <<span aria-hidden="true">&times;</span>>
              </button>
            </div>
            <div class="modal-body">
              <img [src]="modalContent.productImage" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class ProductListComponent implements OnInit {
  arrProduct: Product[] = [
    {
      id: "P001",
      name: "Macbook",
      price: 1000,
      img: "https://picsum.photos/id/1/200",
    },
    {
      id: "P002",
      name: "Asus",
      price: 2000,
      img: "https://picsum.photos/id/2/200",
    },
    {
      id: "P003",
      name: "Acer",
      price: 1000,
      img: "https://picsum.photos/id/3/200",
    },
  ];

  modalContent: ModalContent = {
    productName: "nameDefault",
    productImage: "https://picsum.photos/200/200",
  };

  clickMuaHang(giaTriOutPut: any) {
    this.modalContent = giaTriOutPut;
  }

  status: boolean = false;
  @ViewChildren(ProductComponent) dsTagProduct!: QueryList<ProductComponent>;
  giamGia() {
    this.status = true;
    this.dsTagProduct.map((tagProduct: ProductComponent, index: number) => {
      tagProduct.product.price *= 0.8;
    });
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

interface ModalContent {
  productName: string;
  productImage: string;
}
