import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/userModel';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  user = new User();
  testId:string;
  userTestId:string;

  constructor(private router: Router,private route: ActivatedRoute, private authService: AuthenticationService ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const testId = params.get('id');
      this.testId = testId;
    })
  }

  
  signUp() {
    this.authService.StudentSignup(this.user,this.testId).subscribe((data)=>{
      this.userTestId = data[0][0].testId;
    })
  }

}
