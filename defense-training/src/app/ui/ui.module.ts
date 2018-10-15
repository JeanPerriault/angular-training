import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class UiModule { }
