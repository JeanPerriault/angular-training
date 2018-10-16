import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableComponent } from './components/table/table.component';
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TotalPipe, TableComponent, TableauComponent],
  exports: [TotalPipe, TableauComponent]
})
export class SharedModule { }
