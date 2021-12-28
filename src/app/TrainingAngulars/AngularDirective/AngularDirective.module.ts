// CommonModule: là thư viện của Angular để định nghĩa các structural directive

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularDirectiveComponent } from "./AngularDirective.component";
import { BaiTapDirectiveComponent } from "./bai-tap-directive.component";
import { ChildComponent } from "./Child.component";

@NgModule({
  imports: [CommonModule, FormsModule], //base module for Directives
  exports: [AngularDirectiveComponent],
  declarations: [
    AngularDirectiveComponent,
    ChildComponent,
    BaiTapDirectiveComponent,
  ],
})
export class AngularDirectiveModule {}
