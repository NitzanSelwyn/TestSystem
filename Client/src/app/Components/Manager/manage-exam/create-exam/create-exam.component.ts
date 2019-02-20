import { Component, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  showSpinner = false;
  subjectname: string;
  subjectId: string;
  organizationId: string;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  Languges: any[] = [
    { value: 'English', viewValue: 'English' },
    { value: 'Hebrew', viewValue: 'Hebrew' }
  ];

  ngOnInit() {
    this.showSpinner = true;
    this.route.paramMap.subscribe(params => {
        const subjectid = params.get('subjectid');
        const name = params.get('subjectname');
        const organizationId = params.get('organizationId');
        this.subjectId = subjectid;
        this.subjectname = name;
        this.organizationId = organizationId;
    })
    
  }
}

