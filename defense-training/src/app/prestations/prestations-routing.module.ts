import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { PrestationsComponent } from './containers/prestations/prestations.component';


const appRoutes: Routes = [
  { path: '', component: PrestationsComponent },
  { path: 'add', component: AddPrestationComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
