import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  showSpinner = false;
  email: string;
  password: string;
  constructor(private authService: AuthenticationService) { }
  
  ngOnInit() {
  }


  login(){
  this.showSpinner = true;

    this.authService.AdminLogin(this.email,this.password).subscribe((data) =>{
      console.log(data);
      this.showSpinner = false;

      localStorage.setItem('AdminName',data.FullName);
      localStorage.setItem('AdminEmail',data.Email);
    });
  }

}
