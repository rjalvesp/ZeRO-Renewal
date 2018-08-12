import { UsersService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as TokenActions from '../store/actions/token.actions';
import { Router } from '@angular/router';   
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/state';
import { Token } from '../models/token.model';

@Injectable()
export class AuthService {
  url : string = '/api/v1/authorization/';
  urlLogin: string = this.url + 'login';
  urlLogout: string = this.url + 'logout';
  urlRefresh: string = this.url + 'refresh';
  public token: Token;
  constructor(private http: HttpClient, private router : Router, private store: Store<AppState>, private usersService: UsersService) {
      
  }

  login(creds: any): Observable<any> {
    return this.http.post<any>(this.urlLogin, creds).map((response)=>{
      let token = new Token(response);
      this.store.dispatch(new TokenActions.Store(token));
      this.token = token;
      this.usersService.me();
      return token;
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