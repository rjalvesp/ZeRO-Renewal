import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable()
export class CharactersService {
  url : string = '/api/v1/characters';
  urlViews : string = `${this.url}/views`;
  urlViewsClass : string = `${this.url}/views/classes`;
  constructor(private http: HttpClient, private router : Router) {
  }
}