import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-register',
  templateUrl: './manager-register.component.html',
  styleUrls: ['./manager-register.component.css']
})
export class ManagerRegisterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  showSpinner = false;


  register() {
    this.showSpinner = true;
    if (this.password == this.confirmPassword) {
      this.authService.AdminRegiser(this.email, this.password, this.fullName).subscribe((data) => {
        console.log(data)
        this.showSpinner = false;
      });
    }
  }

  ngOnInit() {
    // if (this.authService.isAuthenticated) {
    //   this.router.navigate(['/managermain'])
    // }
  }

}
