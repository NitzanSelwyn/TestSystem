import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  constructor() { }

  Languges: any[] = [
    { value: 'English', viewValue: 'English' },
    { value: 'Hebrew', viewValue: 'Hebrew' }
  ];

  ngOnInit() {

  }

}
