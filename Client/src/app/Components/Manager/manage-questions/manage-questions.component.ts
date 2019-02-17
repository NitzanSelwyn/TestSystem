import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { PageEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {

  showSpinner = false;
  id: string;
  subjectname: string;

  displayedColumns = ['QuestionId', 'Qustion', 'LastUpdate', 'QustionType', 'NumberTests', 'Buttons'];
  dataSource: MatTableDataSource<Questions>;
  questions: Questions[] = [];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.route.paramMap.subscribe(params => {
      const subjectid = params.get('subjectid');
      const name = params.get('subjectname');
      const organizationId = params.get('organizationId');
      this.id = subjectid;
      this.subjectname = name;
      this.authService.GetQuestionBySubjectId(organizationId, subjectid).subscribe((data) => {
        console.log(data);
        this.questions = data;
        this.dataSource = new MatTableDataSource(this.questions);

        this.showSpinner = false;
      });
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  showQuestion(id){
    console.log(id);
  }

}

export interface Questions {
  QuestionId: string;
  Title: string;
  TextBelow: string;
  IsMultyChoice: string;
}
