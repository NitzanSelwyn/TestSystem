import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { PageEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { ShowAnswersComponent } from './show-answers/show-answers.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {

  showSpinner = false;
  subjectid: string;
  subjectname: string;
  organizationId:string;

  displayedColumns = ['QuestionId', 'Qustion', 'LastUpdate', 'QustionType', 'NumberTests', 'Buttons'];
  dataSource: MatTableDataSource<Questions>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService,
    public dialog: MatDialog, private location: Location) { }

  ngOnInit() {
    this.showSpinner = true;
    this.route.paramMap.subscribe(params => {
      const subjectid = params.get('subjectid');
      const name = params.get('subjectname');
      const organizationId = params.get('organizationId');
      this.subjectid = subjectid;
      this.subjectname = name;
      this.organizationId = organizationId;
      this.authService.GetQuestionBySubjectId(organizationId, subjectid).subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.tryTest();
        this.showSpinner = false;
      });
    })
  }

  tryTest() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  backClicked() {
    this.location.back();
  }

  moveToCreateQuestion(){
    this.router.navigate(['/createquestion',{organizationId:this.organizationId,subjectid:this.subjectid}])
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //opens a dialog modal and shows the answers of the questions
  showQuestion(id) {
    this.dialog.open(ShowAnswersComponent, {
      data: {
        datakey: id
      }
    });
  }

}

export interface Questions {
  QuestionId: string;
  Title: string;
  TextBelow: string;
  IsMultyChoice: string;
}
