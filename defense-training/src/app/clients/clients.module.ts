import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ClientComponent } from './components/client/client.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { ClientsComponent } from './containers/clients/clients.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TemplatesModule,
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientsComponent,
    ListClientsComponent,
    ClientComponent,
    DetailsClientComponent,
    AccordionComponent,
    AddClientComponent,
    FormReactiveComponent
  ]
})

export class ClientsModule { }
