import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './containers/clients/clients.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AddClientComponent } from './containers/add-client/add-client.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: 'details',
        component: DetailsClientComponent
      },
      {
        path: 'accordion',
        component: AccordionComponent
      }
    ]
  },
  { path: 'add', component: AddClientComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [],
  exports: [RouterModule]
})

export class ClientsRoutingModule { }
