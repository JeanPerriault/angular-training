import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './containers/prestations-routing.module';
import { PrestationsComponent } from './containers/prestations/prestations.component';


@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ],
  declarations: [PrestationsComponent, ListPrestationsComponent, PrestationComponent]
})
export class PrestationsModule { }
