import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ShowAnswersComponent } from '../../../manage-questions/show-answers/show-answers.component';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.css']
})
export class QuestionsTableComponent implements OnInit {


  @Output() selectQuestion = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() organizationId: string;
  @Input() subjectId: string;


  displayedColumns = ['QuestionId', 'select', 'title', 'show'];
  dataSource: MatTableDataSource<Questions>;
  selection = new SelectionModel<Questions>(true, []);
  showSpinner = false;

  constructor(private authService: AuthenticationService, public dialog: MatDialog) { }

  ngOnInit() {
    this.showSpinner = true;
    this.authService.GetQuestionBySubjectId(this.organizationId, this.subjectId).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.SettingData();
      this.showSpinner = false;
    })

  }

  SettingData() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  showQuestion(id) {
    this.dialog.open(ShowAnswersComponent, {
      data: {
        datakey: id
      }
    });
  }

  onSelect(row) {
    this.selection.toggle(row);
    this.selectQuestion.emit(
      this.selection.selected.map(q => {
        return q.QuestionId;
      })
    );
  }

}

export interface Questions {
  QuestionId: number;
  Title: string;
  Tags: string;
  TextBelow: string;
  HorizontalDisplay: boolean;
  MultipleChoice: boolean;
}
