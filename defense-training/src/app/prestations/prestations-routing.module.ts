import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './containers/prestations/prestations.component';


const appRoutes: Routes = [
  { path: '', component: PrestationsComponent }
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
