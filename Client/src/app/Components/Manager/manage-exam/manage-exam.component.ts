import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

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
    })
  }

}
