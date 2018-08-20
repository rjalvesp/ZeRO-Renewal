import { Observable } from 'rxjs/Observable';
import { NewsService } from './../../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news.model';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  items: Array<News> = [];
  constructor(
    private newsService : NewsService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
    this.snotifyService.async('Loading News...', 
      Observable.create(observer => {
        this.newsService.browse();
        this.newsService.collectionSubject.subscribe((news: Array<News>)=>{
          this.items = news;
          observer.next({
            title: 'Complete',
            body: 'News Loaded!',
            config: {
              closeOnClick: true,
              timeout: 2000,
              showProgressBar: true
            }
          });
          observer.complete();
        }, ()=>{
          observer.error({
            title: 'Error',
            body: 'Couldn\'t Load News :(!',
            config: {
              closeOnClick: true,
              timeout: 2000,
              showProgressBar: true
            }
          });
          observer.complete();
        })
      })
    );
  }

}
