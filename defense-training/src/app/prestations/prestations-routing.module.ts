import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationsComponent } from './containers/edit-prestations/edit-prestations.component';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { PrestationResolverService } from './services/prestation-resolver.service';


const appRoutes: Routes = [
  {
    path: '',
    component: PrestationsComponent
  },
  {
    path: 'add',
    component: AddPrestationComponent
  },
  {
    path: 'edit/:id',
    component: EditPrestationsComponent,
    resolve: {
      item: PrestationResolverService
    }
  }
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
