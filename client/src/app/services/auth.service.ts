import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';   

@Injectable()
export class AuthService {
  url : string = '/api/v1/authorization/';
  urlLogin: string = this.url + 'login';
  urlLogout: string = this.url + 'logout';
  urlRefresh: string = this.url + 'refresh';
  constructor(private http: HttpClient, private router : Router) {
      
  }

  login(creds: any): Observable<any> {
    return this.http.post<any>(this.urlLogin, creds).map((response)=>{
    //   this.token = new Token(response);
    //   this.isLoggedInSubject.next(true);
    //   this.tokenSubject.next(this.token);
    //   window.localStorage.setItem('token', JSON.stringify(this.token));
    //   return this.token;
    });
  }

//   logout(): Observable<any> {
//     window.localStorage.setItem('token', JSON.stringify(null));
//     window.localStorage.setItem('user', JSON.stringify(null));
//     this.token = null;
//     return this.http.post<any>(this.urlLogout, {}).map((response)=>{
//       this.isLoggedInSubject.next(false);
//       this.tokenSubject.next(this.token)
//       return response;
//     });
//   }

//   refresh(): Observable<any> {
//     return this.http.post<any>(this.urlRefresh, this.token).map((response)=>{
//       if (!response) return;
//       this.token = new Token(response);
//       this.isLoggedInSubject.next(true);
//       this.tokenSubject.next(this.token);
//       window.localStorage.setItem('token', JSON.stringify(this.token));
//       return this.token;
//     });
//   }
}