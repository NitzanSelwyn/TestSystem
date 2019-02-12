import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  AdminRegiser() {

  }

  AdminLogin(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/manager/login', { email, password })

  }
}
