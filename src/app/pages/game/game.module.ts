import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DetailComponent
  ]
})
export class GameModule { }
