import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css']
})
export class StudentTestComponent implements OnInit {

  studentTestId: string;
  testId: string;
  questions = [];
  exam: any;
  questionIndex = 0;
  answersArr = [];


  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const studentTestId = params.get('studentTestId');
      const testId = params.get('testId');
      this.testId = testId;
      this.studentTestId = studentTestId;
      this.authService.StudentTest(this.testId).subscribe((data) => {
        this.exam = data;
        this.questions = data.questions
        console.log(data)
      })
    })
  }

  test(question){
    this.answersArr.push(question);
    console.log(this.answersArr)
  }

  nextQuestion(){
    if (this.questionIndex == this.questions.length -1) {
      this.toast.warning('Last question', 'hello')
      return;
    }else{
      this.questionIndex += 1;
    }
  }

  beforeQuestion(){
    if (this.questionIndex == 0) {
      this.toast.warning('First Question', 'hello')
      return;
    }else{
      this.questionIndex -= 1;
    }
  }

}
