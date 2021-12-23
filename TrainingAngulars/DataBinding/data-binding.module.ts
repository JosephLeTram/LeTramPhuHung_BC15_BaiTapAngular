import { NgModule } from '@angular/core';
import { OneWayBindingComponent } from './one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

// module đẻ sử dụng 2 wway binding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OneWayBindingComponent, TwoWayBindingComponent],
  imports: [FormsModule],
  exports: [OneWayBindingComponent, TwoWayBindingComponent],
})
export class DataBindingModule {}
