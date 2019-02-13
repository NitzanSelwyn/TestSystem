import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerRegisterComponent } from '../Components/Manager/manager-register/manager-register.component';
import { ManagerLoginComponent } from '../Components/Manager/manager-login/manager-login.component';
import { CreateExamComponent } from '../Components/Manager/create-exam/create-exam.component';
import { ManagerMainComponent } from '../Components/Manager/manager-main/manager-main.component';

const routes: Routes = [
  { path: 'managerregister', component: ManagerRegisterComponent },
  { path: 'managerlogin', component: ManagerLoginComponent },
  { path: 'createexam', component: CreateExamComponent },
  {path:'managermain',component:ManagerMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
