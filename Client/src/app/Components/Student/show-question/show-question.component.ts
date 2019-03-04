import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/Models/answer';
import { Question } from 'src/app/Models/question';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {


  @Input() question: any;
  answers: AnswerTest[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectAnswer(id) {
    this.answers.forEach(item => {
      if (item.AnswerId === id) {
        item.Selected = true;
      } else {
        item.Selected = false;
      }
    });

    console.log(this.answers)
  }

}

export class AnswerTest {
  AnswerId: number;
  QuestionId: number;
  Selected:boolean;
}
