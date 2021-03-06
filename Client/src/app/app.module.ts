
import { AppRoutingModule } from './Modules/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from 'ngx-toastr';

import { MtCompModule } from './Modules/mt-comp.module';
import { CreateExamComponent } from './Components/Manager/manage-exam/create-exam/create-exam.component';
import { ManagerLoginComponent } from './Components/Manager/manager-login/manager-login.component';
import { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material';

import { AuthenticationService } from './Services/authentication.service';
import { ManagerRegisterComponent } from './Components/Manager/manager-register/manager-register.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ManagerMainComponent } from './Components/Manager/manager-main/manager-main.component';
import { OrganizationMainComponent } from './Components/Manager/organization-main/organization-main.component';
import { LoadingScreenComponent } from './Components/loading-screen/loading-screen.component';
import { LoadingScreenInterceptor } from './Services/loading.interceptor';
import { LoadingScreenService } from './Services/loading-screen.service';
import { ManageQuestionsComponent } from './Components/Manager/manage-questions/manage-questions.component';
import { ShowAnswersComponent } from './Components/Manager/manage-questions/show-answers/show-answers.component';
import { CreateQuestionComponent } from './Components/Manager/manage-questions/create-question/create-question.component';
import { ManageExamComponent } from './Components/Manager/manage-exam/manage-exam.component';
import { QuestionsTableComponent } from './Components/Manager/manage-exam/create-exam/questions-table/questions-table.component';

import { AppErrorHandler } from './Helper/error-handle';
import { ClipboardModule } from 'ngx-clipboard';
import { StudentSignupComponent } from './Components/Student/student-signup/student-signup.component';
import { StudentTestComponent } from './Components/Student/student-test/student-test.component';
import { ShowQuestionComponent } from './Components/Student/show-question/show-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateExamComponent,
    ManagerLoginComponent,
    ManagerRegisterComponent,
    NavbarComponent,
    ManagerMainComponent,
    OrganizationMainComponent,
    LoadingScreenComponent,
    ManageQuestionsComponent,
    ShowAnswersComponent,
    CreateQuestionComponent,
    ManageExamComponent,
    QuestionsTableComponent,
    StudentSignupComponent,
    StudentTestComponent,
    ShowQuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MtCompModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }),
    HttpClientModule,
    ClipboardModule

  ],
  providers: [
    // { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingScreenInterceptor, multi: true },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    AuthenticationService,
    LoadingScreenService
  ],
  bootstrap: [AppComponent],
  entryComponents:[ShowAnswersComponent]
})
export class AppModule { }
