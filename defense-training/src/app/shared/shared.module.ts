import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TotalPipe],
  exports: [TotalPipe]
})
export class SharedModule { }
