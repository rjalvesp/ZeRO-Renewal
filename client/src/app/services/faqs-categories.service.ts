import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FaqCategory } from '../models/faq-category.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FaqsCategoriesService {
  public baseUrl = '/api/v1/faqs-categories';
  public collectionSubject : BehaviorSubject<Array<FaqCategory>> = new BehaviorSubject<Array<FaqCategory>>([]);
  constructor(
    private http: HttpClient,
  ) { }
  browse() {
    this.http.get<Array<FaqCategory>>(this.baseUrl, httpOptions)
      .subscribe((models: Array<FaqCategory>)=>{
        this.collectionSubject.next(this.deserializeArray(models));
      });
  }
  rxJsBrowse() {
    return this.http.get<Array<FaqCategory>>(this.baseUrl, httpOptions)
      .map((models: Array<FaqCategory>)=>{
         return this.deserializeArray(models);
      });
  }
  get(id: number) : Observable<FaqCategory>{
    return this.http.get<FaqCategory>(this.baseUrl + `/${id}` , httpOptions)
      .pipe(
        tap(model => this.deserialize(model)),
      );
  }
  save(model: FaqCategory) : Observable<FaqCategory>{
    if (!model.id){
      return this.http.post<FaqCategory>(this.baseUrl, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    } else {
      return this.http.put<FaqCategory>(this.baseUrl + `/${model.id}`, model.json, httpOptions)
        .pipe(
          tap(model => this.deserialize(model)),
        );
    }
  }
  delete(id: number) : Observable<FaqCategory>{
    return this.http.delete<FaqCategory>(this.baseUrl + `/${id}` , httpOptions);
  }
  /** Log a HeroService message with the MessageService */
  private deserializeArray(all: Array<FaqCategory>) {
    return all.map((m)=>{ return new FaqCategory(m); })
  }
  private deserialize(m: FaqCategory) {
    return new FaqCategory(m);
  }
}
