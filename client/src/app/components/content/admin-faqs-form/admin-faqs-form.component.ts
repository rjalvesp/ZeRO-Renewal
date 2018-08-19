import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Faq } from '../../../models/faq.model';
import { FaqCategory } from '../../../models/faq-category.model';
import { FaqsService } from '../../../services/faqs.service';
import { FaqsCategoriesService } from '../../../services/faqs-categories.service';
import { AppState } from '../../../store/states/state';
import { SnotifyService } from 'ng-snotify';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-faqs-form',
  templateUrl: './admin-faqs-form.component.html',
  styleUrls: ['./admin-faqs-form.component.scss']
})
export class AdminFaqsFormComponent implements OnInit {

  model: Faq = new Faq({});
  categories: Array<FaqCategory> = [];  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private faqsCategoriesService: FaqsCategoriesService,
    private faqsService: FaqsService,
    private snotifyService: SnotifyService
  ) { 
    
  }

  ngOnInit() {
    let id : string = this.route.snapshot.paramMap.get('id'); 
    this.faqsCategoriesService.browse();
    this.faqsCategoriesService.collectionSubject.subscribe((items: Array<FaqCategory>)=>{
      this.categories = items;
    });
    if (!id) return;
    this.LoadModel(parseInt(id, 10));
  }

  back(){
    this.router.navigate(['/admin/faqs']);
  }

  submit(){
    this.snotifyService.async('Saving Faq...', 
      Observable.create(observer => {
        this.faqsService.save(this.model).subscribe(()=>{
          observer.next({
            title: 'Complete',
            body: 'Faq Saved!',
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
    this.snotifyService.async('Loading Faq...', 
      Observable.create(observer => {
        this.faqsService.get(id).subscribe((model: Faq)=>{
          this.model = new Faq(model);
          observer.next({
            title: 'Complete',
            body: 'Faq Loaded!',
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
