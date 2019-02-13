import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-manager-main',
  templateUrl: './manager-main.component.html',
  styleUrls: ['./manager-main.component.css']
})
export class ManagerMainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  Organizations: any[];
  showSpinner = false;

  ngOnInit() {
    this.showSpinner = true;

    this.authService.GetManagerOrganizations().subscribe((data) => {

      this.showSpinner = false;
      this.Organizations = data;

    });
  }

  nextPage(id){
    this.router.navigate(['/organizationmain',{id: id}]);
  }
}

