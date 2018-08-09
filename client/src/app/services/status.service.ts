import { Status } from './../models/status.model';
import * as TimezoneActions from './../store/actions/timezone.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';   
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/state';
import * as OnlineActions from '../store/actions/online.actions';
import * as StatusActions from '../store/actions/status.actions';

@Injectable()
export class StatusService {
  url : string = '/api/v1/status';
  constructor(private http: HttpClient, private router : Router, private store: Store<AppState>) {
  }

  timezone(): Observable<any> {
    return this.http.get<any>(`${this.url}/timezone`).map((response: number)=>{
        this.store.dispatch(new TimezoneActions.Store(response));
    });
  }

  online(): Observable<any> {
    return this.http.get<any>(`${this.url}/online`).map((response: number)=>{
      this.store.dispatch(new OnlineActions.Store(response));
    });
  }

  info(): Observable<any> {
    return this.http.get<any>(`${this.url}/info`).map((response: any)=>{
      console.log(response);
        let status = new Status(response);
        this.store.dispatch(new StatusActions.Store(status));
        return status;
    });
  }
}