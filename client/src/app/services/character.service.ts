import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable()
export class CharactersService {
  url : string = '/api/v1/characters';
  urlViews : string = `${this.url}/views`;
  urlViewsClass : string = `${this.url}/views/classes`;
  urlViewsDashboard : string = `${this.url}/views/dashboard`;
  constructor(private http: HttpClient, private router : Router) {
  }
  
  dashboard() {
    return this.http.get(this.urlViewsDashboard);
  }
}