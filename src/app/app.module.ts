import { NgModule, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  declarations: [
    CustomSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const CustomSelectElement = createCustomElement(CustomSelectComponent, { injector: this.injector });
    customElements.define('infy-select', CustomSelectElement);
  }
}
