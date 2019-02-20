import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { textBinding } from '@angular/core/src/render3';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  subjectid: string;
  organizationId: string;
  answers: Answer[] = [new Answer(), new Answer()];
  answer = false;
  checked = false;
  Horizantle = false;
  textBelow: string;
  quextionText: string;
  questionTags:string;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService
    , private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.subjectid = params.get('subjectid');
      this.organizationId = params.get('organizationId');
    });
  }

  moreQAnswers() {
    this.answers.push(new Answer());
  }

  selectAnswer(answer, i) {
    this.answers.forEach((item) => {
      item.IsCorrect = false;
    })
    answer.IsCorrect = true;
  }

  turnAllAnswersToFalse() {
    this.answers.forEach((item) => {
      item.IsCorrect = false;
    })
  }

  deleteAnswer(index) {
    this.answers.splice(index, 1);
  }

  AddQuestion() {

    const question = new Question(this.Horizantle, this.checked, this.quextionText, this.textBelow, this.subjectid,this.questionTags);

    this.authService.AddNewQuestion(this.answers, question).subscribe((data) => {
      if(data == true){
        this.backClicked();
      }else{
        alert("error")
        this.backClicked();
      }
    })
  }

  backClicked() {
    this.location.back();
  }
}

export class Answer {
  IsCorrect: boolean;
  QuestionId: string;
  Title: string;
}

export class Question {
  constructor(isHorizantle, isMultiCoice, questionText, textBelow, subjectId,questionTags) {
    this.IsHorizantle = isHorizantle;
    this.IsMultiCoice = isMultiCoice;
    this.QuestionText = questionText;
    this.TextBelow = textBelow;
    this.SubjectId = subjectId;
    this.QuestionTags = questionTags;
  }

  public IsHorizantle: boolean;
  public IsMultiCoice: boolean;
  public QuestionText: string;
  public TextBelow: string;
  public SubjectId: string;
  public QuestionTags:string;
  
}
