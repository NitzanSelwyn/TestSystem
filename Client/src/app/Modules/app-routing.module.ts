import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerRegisterComponent } from '../Components/Manager/manager-register/manager-register.component';
import { ManagerLoginComponent } from '../Components/Manager/manager-login/manager-login.component';
import { CreateExamComponent } from '../Components/Manager/manage-exam/create-exam/create-exam.component';
import { ManagerMainComponent } from '../Components/Manager/manager-main/manager-main.component';
import { OrganizationMainComponent } from '../Components/Manager/organization-main/organization-main.component';
import { ManageQuestionsComponent } from '../Components/Manager/manage-questions/manage-questions.component';
import { CreateQuestionComponent } from '../Components/Manager/manage-questions/create-question/create-question.component';
import { ManageExamComponent } from '../Components/Manager/manage-exam/manage-exam.component';
import { StudentSignupComponent } from '../Components/Student/student-signup/student-signup.component';

const routes: Routes = [
  { path: 'managerregister', component: ManagerRegisterComponent },
  { path: 'managerlogin', component: ManagerLoginComponent },
  { path: 'createexam', component: CreateExamComponent },
  { path: 'managermain', component: ManagerMainComponent },
  { path: 'organizationmain', component: OrganizationMainComponent },
  { path: 'managequestions', component: ManageQuestionsComponent },
  { path: 'createquestion', component: CreateQuestionComponent },
  { path: 'manageexam', component: ManageExamComponent },
  { path: 'test/signup', component: StudentSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
