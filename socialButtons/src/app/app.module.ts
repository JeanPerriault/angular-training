import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    SocialButtonsComponent,
    AppComponent
  ]
})


export class AppModule {
  constructor (private injector: Injector) { }

  ngDoBootstrap(app: ApplicationRef) {
    if (environment.production) {
      const SocialButtonElement = createCustomElement(SocialButtonsComponent, {injector: this.injector});
      customElements.define('social-buttons', SocialButtonElement);
    } else {
      app.bootstrap(AppComponent);
    }
  }
}
