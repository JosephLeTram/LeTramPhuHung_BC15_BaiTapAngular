import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ProductListComponent } from "./ProductManagement/ProductList.component";

@Component({
  selector: "app-props-demo",
  template: `<div class="container">
    <h3>Demo Input - Output</h3>
    <app-product-list #tagProductList></app-product-list>
    <hr />
    <!-- <h3>Demo ViewChild</h3>
    <div class="form-group">
      <input id="txt" #tempInput class="form-control" />
      <button class="btn btn-danger mt-3" (click)="getValue()">
        Get value
      </button>
    </div>

    <button class="btn btn-primary mt-3" (click)="addProduct()">
      Add Product
    </button> -->

    <!-- <hr /> -->

    <h3>Demo Add Product</h3>
    <div class="form-group">
      <p>ID</p>
      <input class="form-control" [(ngModel)]="product.id" />
    </div>
    <div class="form-group">
      <p>Name</p>
      <input class="form-control" [(ngModel)]="product.name" />
    </div>
    <div class="form-group">
      <p>Price</p>
      <input class="form-control" [(ngModel)]="product.price" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary" (click)="addNewProduct()">
        Add Product
      </button>
    </div>
  </div>`,
})
export class PropsComponent implements OnInit {
  @ViewChild("tempInput") objectInput!: ElementRef; // ElementRef là thẻ html
  getValue() {
    // let tagInput: any = document.getElementById("txt");
    // alert(tagInput.value);
    alert(this.objectInput?.nativeElement.value);
    this.objectInput.nativeElement.style.color = "red"; // thay đổi giá trị của thẻ đucợ DOM tới
  }

  @ViewChild("tagProductList") tagProductList!: ProductListComponent; //Thẻ component thì kiểu dữ liệu là lớp đối tượng (class) định nghĩa thẻ đó
  addProduct() {
    let newProduct: any = {
      id: "P004",
      name: "Lenovo",
      price: 4000,
      img: "https://picsum.photos/id/4/200",
    };
    this.tagProductList.arrProduct.push(newProduct);
  }

  // Demo  Add Product
  product: any = { id: "", name: "", price: 0, img: "" };
  addNewProduct() {
    let newProduct = {
      ...this.product,
      img: `https://picsum.photos/id/${this.product.id}/200/200`,
    };
    this.tagProductList.arrProduct.push(newProduct);
  }
  constructor() {}

  ngOnInit() {}
}
