import { FaqCategory } from './../../../models/faq-category.model';
import { Token } from './../../../models/token.model';
import { Store } from '@ngrx/store';
import { AppState } from './../../../store/states/state';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FaqsCategoriesService } from '../../../services/faqs-categories.service';
import { SnotifyService } from 'ng-snotify';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-faq-categories-form',
  templateUrl: './admin-faq-categories-form.component.html',
  styleUrls: ['./admin-faq-categories-form.component.scss']
})
export class AdminFaqCategoriesFormComponent implements OnInit {

  model: FaqCategory = new FaqCategory({});
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private faqsCategoriesService: FaqsCategoriesService,
    private snotifyService: SnotifyService
  ) { 
    
  }

  ngOnInit() {
    let id : string = this.route.snapshot.paramMap.get('id'); 
    console.log(id);
    if (!id) return;
    this.LoadModel(parseInt(id, 10));
  }

  back(){
    this.router.navigate(['/admin/faqs-categories']);
  }

  submit(){
    this.snotifyService.async('Saving Faq Category...', 
      Observable.create(observer => {
        this.faqsCategoriesService.save(this.model).subscribe(()=>{
          observer.next({
            title: 'Complete',
            body: 'Faq Category Saved!',
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
    this.snotifyService.async('Loading Faq Category...', 
      Observable.create(observer => {
        this.faqsCategoriesService.get(id).subscribe((model: FaqCategory)=>{
          this.model = new FaqCategory(model);
          observer.next({
            title: 'Complete',
            body: 'Faq Category Loaded!',
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
