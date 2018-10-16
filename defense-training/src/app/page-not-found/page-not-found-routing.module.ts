import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PageNotFoundRoutingModule { }
