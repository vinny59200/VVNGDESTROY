import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VvcomponentComponent } from './vvmodule/vvcomponent/vvcomponent.component';
import { VvmoduleModule } from './vvmodule/vvmodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VvmoduleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
