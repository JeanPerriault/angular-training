import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TemplatesModule
  ],
  declarations: [PrestationsComponent, ListPrestationsComponent, PrestationComponent]
})
export class PrestationsModule { }
