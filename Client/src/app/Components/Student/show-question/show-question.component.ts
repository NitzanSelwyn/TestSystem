import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {


  @Input() question:any;

  constructor() { }

  ngOnInit() {
  }

}
