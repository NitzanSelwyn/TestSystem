
import { AppRoutingModule } from './Modules/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MtCompModule } from './Modules/mt-comp.module';
import { CreateExamComponent } from './Components/Manager/create-exam/create-exam.component';
import { ManagerLoginComponent } from './Components/Manager/manager-login/manager-login.component';
import { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material';

import { AuthenticationService } from './Services/authentication.service';
import { ManagerRegisterComponent } from './Components/Manager/manager-register/manager-register.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ManagerMainComponent } from './Components/Manager/manager-main/manager-main.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CreateExamComponent,
    ManagerLoginComponent,
    ManagerRegisterComponent,
    NavbarComponent,
    ManagerMainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MtCompModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
