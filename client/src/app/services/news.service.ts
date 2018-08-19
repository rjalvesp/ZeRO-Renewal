import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { News } from '../models/news.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public baseUrl = '/api/v1/news';
  public collectionSubject : BehaviorSubject<Array<News>> = new BehaviorSubject<Array<News>>([]);
  constructor(
    private http: HttpClient,
  ) { }
  browse() {
    this.http.get<Array<News>>(this.baseUrl, httpOptions)
      .subscribe((models: Array<News>)=>{
        this.collectionSubject.next(this.deserializeArray(models));
      });
  }
  get(id: number) : Observable<News>{
    return this.http.get<News>(this.baseUrl + `/${id}` , httpOptions)
      .pipe(
        tap(model => this.deserialize(model)),
      );
  }
  save(model: News) : Observable<News>{
    if (!model.id){
      return this.http.post<News>(this.baseUrl, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    } else {
      return this.http.put<News>(this.baseUrl + `/${model.id}`, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    }
  }
  delete(id: number) : Observable<News>{
    return this.http.delete<News>(this.baseUrl + `/${id}` , httpOptions);
  }
  /** Log a HeroService message with the MessageService */
  private deserializeArray(all: Array<News>) {
    return all.map((m)=>{ return new News(m); })
  }
  private deserialize(m: News) {
    return new News(m);
  }
}
