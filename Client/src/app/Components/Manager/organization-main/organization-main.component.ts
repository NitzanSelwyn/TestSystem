import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-organization-main',
  templateUrl: './organization-main.component.html',
  styleUrls: ['./organization-main.component.css']
})
export class OrganizationMainComponent implements OnInit {

  id:string;
  constructor(private route:ActivatedRoute, private authService: AuthenticationService ) { }
  showSpinner = false;
  ngOnInit() {
    this.showSpinner = true;
    this.route.paramMap.subscribe(params2=>{
      const id = params2.get('id');
      this.id = id;
      this.authService.GetSubjectsByOrganizationId(id).subscribe((data)=>{
        this.showSpinner = false;
        console.log(data);

      })
    })
  }

}
