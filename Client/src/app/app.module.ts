
import { AppRoutingModule } from './Modules/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { MtCompModule } from './Modules/mt-comp.module';
import { CreateExamComponent } from './Components/Manager/create-exam/create-exam.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateExamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MtCompModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
