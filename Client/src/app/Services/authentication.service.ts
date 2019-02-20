import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  AdminRegiser(email: string, password: string, name: string) {
    return this.http.post<any>('http://localhost:3000/api/manager/register', { email, password, name })
  }

  AdminLogin(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/manager/login', { email, password })
  }

  GetUserLoggedIn() {
    const user = localStorage.getItem(environment.currentUserStorageKey);
    return JSON.parse(user);
  }

  isAuthenticated() {
    let token = localStorage.getItem(environment.currentUserStorageKey);
    if (!token) return false;
    return true;
  }

  GetQuestionAnswersById(id): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/manager/GetQuestionsAnswersById', { Id: id })
  }

  GetManagerOrganizations(): Observable<any> {
    const user = this.GetUserLoggedIn();
    return this.http.post<any>('http://localhost:3000/api/manager/GetManagerOrganization', { Email: user.Email })
  }

  GetSubjectsByOrganizationId(id): Observable<any> {
    //let options = this.GetOptions(token)
    return this.http.post<any>('http://localhost:3000/api/manager/GetSubjectsByOrganizationId', { Id: id })
  }

  GetQuestionBySubjectId(OrganizationId, SubjectId): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/manager/GetQustionsbySubjectId', { OrganizationId: OrganizationId, SubjectId: SubjectId });
  }

  AddNewQuestion(AnswerArr, QuestionDetails) {
    return this.http.post<any>('http://localhost:3000/api/manager/AddNewQuestion', { Answers: AnswerArr, Question: QuestionDetails });
  }

  GetTestsBySubjectId():Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/manager/AddNewQuestion', {  });
  }

  private GetOptions(token: string) {
    return {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token
        })
    };
  }
}
