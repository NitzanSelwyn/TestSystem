import { Component, OnInit, Input, Output } from '@angular/core';
import { Answer } from 'src/app/Models/answer';
import { Question } from 'src/app/Models/question';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {


  @Input() question: any;
  @Output()  selectedAnswers = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectAnswer(id) {
    this.question.answers.forEach(item => {
      if (item.AnswerId === id) {
        item.Selected = true;
      } else {
        item.Selected = false;
      }
    });
  }

  emitSelectedAnswers(){
    const answers = this.question.answers;
    this.selectedAnswers.emit(answers);
  }
}

