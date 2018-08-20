import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Faq } from '../models/faq.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  public baseUrl = '/api/v1/faqs';
  public collectionSubject : BehaviorSubject<Array<Faq>> = new BehaviorSubject<Array<Faq>>([]);
  constructor(
    private http: HttpClient,
  ) { }
  
  rxJsBrowse() {
    return this.http.get<Array<Faq>>(this.baseUrl, httpOptions)
      .map((models: Array<Faq>)=>{
         return this.deserializeArray(models);
      });
  }
  browse() {
    this.http.get<Array<Faq>>(this.baseUrl, httpOptions)
      .subscribe((models: Array<Faq>)=>{
        this.collectionSubject.next(this.deserializeArray(models));
      });
  }
  get(id: number) : Observable<Faq>{
    return this.http.get<Faq>(this.baseUrl + `/${id}` , httpOptions)
      .pipe(
        tap(model => this.deserialize(model)),
      );
  }
  save(model: Faq) : Observable<Faq>{
    if (!model.id){
      return this.http.post<Faq>(this.baseUrl, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    } else {
      return this.http.put<Faq>(this.baseUrl + `/${model.id}`, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    }
  }
  delete(id: number) : Observable<Faq>{
    return this.http.delete<Faq>(this.baseUrl + `/${id}` , httpOptions);
  }
  /** Log a HeroService message with the MessageService */
  private deserializeArray(all: Array<Faq>) {
    return all.map((m)=>{ return new Faq(m); })
  }
  private deserialize(m: Faq) {
    return new Faq(m);
  }
}
