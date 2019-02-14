import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-organization-main',
  templateUrl: './organization-main.component.html',
  styleUrls: ['./organization-main.component.css']
})
export class OrganizationMainComponent implements OnInit {

  id: string;
  organizationName:string;
  showSpinner = false;
  Subjects: any[];
  selectedValue:any;
 
  constructor(private route: ActivatedRoute, private authService: AuthenticationService) { }

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

  selectedSubject(id){
    console.log(id);
  }

}
