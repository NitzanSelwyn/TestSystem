import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { environment } from "../../../../environments/environment";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  showSpinner = false;
  email: string;
  password: string;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    // if (!this.authService.isAuthenticated) {
    //   this.router.navigate(['/managermain'])
    // }
  }


  login() {
    this.showSpinner = true;

    this.authService.AdminLogin(this.email, this.password).subscribe((data) => {

      this.showSpinner = false;
      
      if (data.length == 0) {
        alert('error! no user OR if you didnt activated your account check email')
      } else {

        const user = { "Name": data.user[0].FullName, "Email": data.user[0].Email, "Token": data.token }

        localStorage.setItem(environment.currentUserStorageKey, JSON.stringify(user));

        if (this.authService.isAuthenticated()) {
          this.router.navigate(['/managermain'])
        }
      }
    });
  }

}
