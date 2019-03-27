import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-show-answers',
  templateUrl: './show-answers.component.html',
  styleUrls: ['./show-answers.component.css']
})
export class ShowAnswersComponent implements OnInit {

  answers: any[];
  showSpinner = false;

  constructor(public dialogRef: MatDialogRef<ShowAnswersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthenticationService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.auth.GetQuestionAnswersById(this.data.datakey).subscribe((data) => {
      console.log(data);
      this.answers = data;
      this.showSpinner = false;
    })
  }

}
