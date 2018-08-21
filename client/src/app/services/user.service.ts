import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';   
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/state';
import * as UsersActions from '../store/actions/user.actions';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  url : string = '/api/v1/users';
  user: User = new User({});
  constructor(private http: HttpClient, private router : Router, private store: Store<AppState>) {
  }

  me() {
    this.http.get<any>(`${this.url}/me`).subscribe((response: User)=>{
      this.user = new User(response);
      this.store.dispatch(new UsersActions.Store(this.user));
    });
  }

  add(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}`, user.json).map((response: User)=>{
      return new User(response);
    });
  }

}