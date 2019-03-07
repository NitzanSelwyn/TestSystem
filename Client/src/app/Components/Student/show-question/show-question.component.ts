import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({
  selector: "app-show-question",
  templateUrl: "./show-question.component.html",
  styleUrls: ["./show-question.component.css"]
})
export class ShowQuestionComponent implements OnInit {

  @Input() question: any;
  @Output() selectedAnswers = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.question.answers.forEach(item => {
      item.Selected = false;
    });
  }

  selectAnswer(id) {
    this.question.answers.forEach(item => {
      if (item.AnswerId === id) {
        item.Selected = true;
      } else {
        item.Selected = false;
      }
    });
    this.emitSelectedAnswers();
  }

  Selectchange(){
    // this.question.answers.forEach(item => {
    //   if (item.AnswerId === id) {
    //     item.Selected = true;
    //   } else {
    //     item.Selected = false;
    //   }
    // });
    this.emitSelectedAnswers();
  }

  emitSelectedAnswers() {
    const answers = this.question.answers;
    this.selectedAnswers.emit(answers)
  }
}
