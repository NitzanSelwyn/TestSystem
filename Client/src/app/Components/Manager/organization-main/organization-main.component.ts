import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-organization-main',
  templateUrl: './organization-main.component.html',
  styleUrls: ['./organization-main.component.css']
})
export class OrganizationMainComponent implements OnInit {

  id: string;
  organizationName: string;
  showSpinner = false;
  Subjects: any[];
  selectedValue: any;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const name = params.get('name');
      this.id = id;
      this.organizationName = name;
      this.authService.GetSubjectsByOrganizationId(id).subscribe((data) => {
        this.Subjects = data;
        this.showSpinner = false;
      })
    })
  }

  manageQuestionPage(subject) {
  
    if(subject == undefined){
      this.toast.warning('you must chooce a subject', 'hello')
      return
    }
   
    this.router.navigate(['/managequestions',{subjectid:subject.SubjectId, subjectname:subject.Name,organizationId:this.id}])
  }

  manageExamPage(subject){
    if(subject == undefined){
      this.toast.warning('you must chooce a subject', 'hello')      
      return
    }
   
    this.router.navigate(['/manageexam',{subjectid:subject.SubjectId, subjectname:subject.Name,organizationId:this.id}])
  }

}
