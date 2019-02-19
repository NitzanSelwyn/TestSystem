import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {Location} from '@angular/common';

@Component({
  selector: 'app-manage-exam',
  templateUrl: './manage-exam.component.html',
  styleUrls: ['./manage-exam.component.css']
})
export class ManageExamComponent implements OnInit {


  showSpinner = false;
  subjectid: string;
  subjectname: string;
  organizationId: string;

displayedColumns = ['ExamId', 'Link', 'NumberOfQuestions', 'LastUpdate', 'Buttons'];
  dataSource: MatTableDataSource<Tests>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService,
     private location: Location) { }

  ngOnInit() {
    this.showSpinner = true;
    this.route.paramMap.subscribe(params => {
      const subjectid = params.get('subjectid');
      const name = params.get('subjectname');
      const organizationId = params.get('organizationId');
      this.subjectid = subjectid;
      this.subjectname = name;
      this.organizationId = organizationId;
      this.showSpinner = false;

      // this.authService.GetTestsBySubjectId().subscribe((data) => {
      //   this.dataSource = new MatTableDataSource(data);
      //   this.settingData();
      // })
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  settingData() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  backClicked(){
    this.location.back();
  }

  moveToCreateExam(){
    this.router.navigate(['/createexam']);
  }

}

export interface Tests {
  ExamId: string;
}
