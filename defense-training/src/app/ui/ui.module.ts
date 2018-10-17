import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { NgbdCollapseBasic } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule,
    FontAwesomeModule
    // NgbdCollapseBasic
  ],
  declarations: [
    UiComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
