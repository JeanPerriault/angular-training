import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { PrestationsRoutingModule } from './containers/prestations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ],
  declarations: [PrestationsComponent]
})
export class PrestationsModule { }
