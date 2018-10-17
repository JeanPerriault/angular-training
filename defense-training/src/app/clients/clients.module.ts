import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './containers/clients/clients.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TemplatesModule
  ],
  declarations: [ClientsComponent, ListClientsComponent, ClientComponent]
})

export class ClientsModule { }
