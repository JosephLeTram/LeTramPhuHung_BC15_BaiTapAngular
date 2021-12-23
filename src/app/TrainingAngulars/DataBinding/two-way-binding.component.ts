import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<div class="container">
    <h3>Two way binding</h3>
    <p>Họ tên: {{ name }}</p>
    <input #iName [(ngModel)]="name" class="w-50" />
    <br />
    <button
      class="btn btn-outline-success mt-3"
      (click)="changeName(iName.value)"
    >
      Change name
    </button>
    <hr />
    <h4>Two Way Binding với object và array</h4>
    <div class="card text-left w-25">
      <img class="card-img-top" [src]="product.img" alt="" />
      <div class="card-body">
        <h4 class="card-title">Name: {{ product.name }}</h4>
        <p class="card-text">Price: {{ product.price }}</p>
      </div>
    </div>

    <div class="form-group">
      <p>Price</p>
      <input [(ngModel)]="product.name" class="form-control" />
    </div>
    <div class="form-group">
      <p>Price</p>
      <input [(ngModel)]="product.price" class="form-control" />
    </div>
    <div class="form-group">
      <button class="btn btn-outline-danger">Submit</button>
    </div>
  </div>`,
})
export class TwoWayBindingComponent implements OnInit {
  product: Product = {
    id: 'SP01',
    name: 'Iphone Pro 13',
    price: 1000,
    img: 'https://picsum.photos/100/100',
  };

  name: string = 'Hung';

  changeName(newName: string) {
    this.name = newName;
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
