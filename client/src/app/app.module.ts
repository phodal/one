import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log(this.constructor['ngInjectorDef']);
    console.log(this.constructor['ngInjectorDef'].imports);
    let routingModule = this.constructor['ngInjectorDef'].imports[2];
    console.log(routingModule['ngInjectorDef']);
  }
}
