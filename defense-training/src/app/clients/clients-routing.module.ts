import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './containers/clients/clients.component';

const appRoutes: Routes = [
  { path: '', component: ClientsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class ClientsRoutingModule { }
