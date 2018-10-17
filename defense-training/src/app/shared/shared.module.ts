import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableComponent } from './components/table/table.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [TotalPipe, TableComponent, TableauComponent, StateDirective, AddRowComponent, TableauLightComponent],
  exports: [TotalPipe, TableauComponent, StateDirective, AddRowComponent, TableauLightComponent]
})
export class SharedModule { }
