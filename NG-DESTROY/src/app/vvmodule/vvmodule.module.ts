import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VvcomponentComponent } from './vvcomponent/vvcomponent.component';
import { VvserviceService } from './vvservice.service';



@NgModule({
  declarations: [
    VvcomponentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [VvserviceService],
  exports: [VvcomponentComponent]
})
export class VvmoduleModule { }
