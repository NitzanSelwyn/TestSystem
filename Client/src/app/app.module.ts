import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MtCompModule } from './Modules/mt-comp.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MtCompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
