import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public baseUrl = '/api/v1/items';
  public cardsUrl = `${this.baseUrl}/cards`;
  constructor(
    private http: HttpClient,
  ) { }
  mvpCards() : Observable<Array<{id: number, total: number}>>{
    return this.http.get<Array<{id: number, total: number}>>(`${this.cardsUrl}/mvps` , httpOptions);;
  }
}
