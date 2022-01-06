import { NgModule } from "@angular/core";
import { DemoUIComponent } from "./DemoUI.component";

// Directive ngIF, for...
import { CommonModule } from "@angular/common";
//2waybinding
import { FormsModule } from "@angular/forms";
//Material Component
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MaterialModule } from "../__core/modules/Material.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MaterialModule,
  ],
  exports: [DemoUIComponent],
  declarations: [DemoUIComponent],
})
export class DemoUIModule {}
