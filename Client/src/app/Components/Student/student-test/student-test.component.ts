import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css']
})
export class StudentTestComponent implements OnInit {

  studentTestId:string;
  testId:string;
  questions = [];
  exam:any;

  constructor(private router: Router,private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const studentTestId = params.get('studentTestId');
      const testId = params.get('testId');
      this.testId = testId;
      this.studentTestId = studentTestId;
     this.authService.StudentTest(this.testId).subscribe((data)=>{
       this.exam = data;
       this.questions = data.questions
      console.log(this.questions)
     })
    })
  }

}
