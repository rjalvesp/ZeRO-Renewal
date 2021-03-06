import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../../store/states/state';
import { SnotifyService } from 'ng-snotify';
import { Store } from '@ngrx/store';
import { NewsService } from '../../../services/news.service';
@Component({
  selector: 'app-admin-news-form',
  templateUrl: './admin-news-form.component.html',
  styleUrls: ['./admin-news-form.component.scss']
})
export class AdminNewsFormComponent implements OnInit {
  model: News = new News({});
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private newsService: NewsService,
    private snotifyService: SnotifyService
  ) { 
    
  }

  ngOnInit() {
    let id : string = this.route.snapshot.paramMap.get('id'); 
    if (!id) return;
    this.LoadModel(parseInt(id, 10));
  }

  back(){
    this.router.navigate(['/admin/news']);
  }

  submit(){
    this.snotifyService.async('Saving News...', 
      Observable.create(observer => {
        this.newsService.save(this.model).subscribe(()=>{
          observer.next({
            title: 'Complete',
            body: 'News Saved!',
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
            body: 'Something happened :(!',
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

  LoadModel(id: number){
    this.snotifyService.async('Loading News...', 
      Observable.create(observer => {
        this.newsService.get(id).subscribe((model: News)=>{
          this.model = new News(model);
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
            body: 'Something happened :(!',
            config: {
              closeOnClick: true,
              timeout: 2000,
              showProgressBar: true
            }
          });
          observer.complete();
        });
      })
    );
  }

}
