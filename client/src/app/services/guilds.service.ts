import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Guild } from '../models/guilds.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GuildsService {

  public baseUrl = '/api/v1/guilds';
  public collectionSubject : BehaviorSubject<Array<Guild>> = new BehaviorSubject<Array<Guild>>([]);
  constructor(
    private http: HttpClient,
  ) { }
  browse() {
    this.http.get<Array<Guild>>(this.baseUrl, httpOptions)
      .subscribe((models: Array<Guild>)=>{
        this.collectionSubject.next(this.deserializeArray(models));
      });
  }
  get(id: number) : Observable<Guild>{
    return this.http.get<Guild>(this.baseUrl + `/${id}` , httpOptions)
      .pipe(
        tap(model => this.deserialize(model)),
      );
  }
  save(model: Guild) : Observable<Guild>{
    if (!model.id){
      return this.http.post<Guild>(this.baseUrl, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    } else {
      return this.http.put<Guild>(this.baseUrl + `/${model.id}`, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    }
  }
  delete(id: number) : Observable<Guild>{
    return this.http.delete<Guild>(this.baseUrl + `/${id}` , httpOptions);
  }
  /** Log a HeroService message with the MessageService */
  private deserializeArray(all: Array<Guild>) {
    return all.map((m)=>{ return new Guild(m); })
  }
  private deserialize(m: Guild) {
    return new Guild(m);
  }
}
