import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { environment } from "../../../../environments/environment";
import { Router, ActivatedRoute } from '@angular/router';

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
    // if(this.authService.isAuthenticated){
    //   this.router.navigate(['/managermain'])
    // }
  }


  login() {
    this.showSpinner = true;

    this.authService.AdminLogin(this.email, this.password).subscribe((data) => {
      console.log(data);
      this.showSpinner = false;

      const user = { "Name": data[0].FullName, "Email": data[0].Email }

      // localStorage.setItem('AdminName',data[0].FullName);
      // localStorage.setItem('AdminEmail',data[0].Email);

      localStorage.setItem(environment.currentUserStorageKey, JSON.stringify(user));

      if(this.authService.isAuthenticated()){
        this.router.navigate(['/managermain'])
      }

    });
  }

}
