import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BaiTapDatVeComponent } from "./BaiTapDatVe/BaiTapDatVe.component";
import { GheComponent } from "./BaiTapDatVe/Ghe.component";

import { ProductComponent } from "./ProductManagement/Product.component";
import { ProductListComponent } from "./ProductManagement/ProductList.component";
import { PropsComponent } from "./Props.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [PropsComponent, BaiTapDatVeComponent],
  declarations: [
    ProductListComponent,
    ProductComponent,
    PropsComponent,
    BaiTapDatVeComponent,
    GheComponent,
  ],
})
export class PropsModule {}
