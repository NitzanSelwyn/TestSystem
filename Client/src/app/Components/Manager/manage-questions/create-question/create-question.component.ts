import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  subjectid:string;
  organizationId:string;
  answers:Answer[] = [new Answer,new Answer];
  answer = false;
  checked = false;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.subjectid = params.get('subjectid');
      this.organizationId = params.get('organizationId');
    });
  }

  moreQAnswers(){
    this.answers.push(new Answer());
  }

}

export class Answer{
  IsCorrect:boolean;
  QuestionId:string;
  Title:string;
}
