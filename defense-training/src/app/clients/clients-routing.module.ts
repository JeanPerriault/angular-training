import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './containers/clients/clients.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { AccordionComponent } from './components/accordion/accordion.component';

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
  }
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
