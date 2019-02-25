import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/userModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  user = new User();
  testId:string;

  constructor(private router: Router,private route: ActivatedRoute, ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const testId = params.get('id');
      this.testId = testId;
    })
  }

  signUp() {
    alert(this.testId)
  }

}