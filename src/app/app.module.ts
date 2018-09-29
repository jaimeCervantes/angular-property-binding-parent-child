import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PbPersonListModule } from './pb-person-list/pb-person-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PbPersonListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
