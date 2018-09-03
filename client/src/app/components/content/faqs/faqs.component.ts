import { Observable } from 'rxjs/Observable';
import { FaqsCategoriesService } from './../../../services/faqs-categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaqsService } from '../../../services/faqs.service';
import { FaqGroup } from '../../../models/faq-groups.model';
import { SnotifyService } from 'ng-snotify';
import { FaqCategory } from '../../../models/faq-category.model';
import { Faq } from '../../../models/faq.model';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit, OnDestroy {

  items: Array<FaqGroup> = [];
  constructor(
    private faqsCategoriesService: FaqsCategoriesService,
    private faqsService: FaqsService,
    private snotifyService: SnotifyService
  ) { }
  ngOnDestroy() {
    this.faqsCategoriesService.collectionSubject.unsubscribe();
    this.faqsService.collectionSubject.unsubscribe();
  }
  ngOnInit() {
    this.snotifyService.async('Loading Faqs...', 
      Observable.create(observer => {
        // this.faqsCategoriesService.browse();
        this.faqsCategoriesService.rxJsBrowse().subscribe((faqCategories: Array<FaqCategory>)=>{
          this.faqsService.rxJsBrowse().subscribe((faqs: Array<Faq>)=>{
            
            faqCategories.forEach((faqCategory: FaqCategory)=>{
              this.items.push(new FaqGroup(faqCategory, faqs));
            });
            observer.next({
              title: 'Complete',
              body: 'Faqs Loaded!',
              config: {
                closeOnClick: true,
                timeout: 2000,
                showProgressBar: true
              }
            });
            observer.complete();
          }, ()=>{ this.error(observer) });
        }, ()=>{ this.error(observer) })
      })
    );
  }
  error(observer: any){
    observer.error({
      title: 'Error',
      body: 'Couldn\'t Load Faqs :(!',
      config: {
        closeOnClick: true,
        timeout: 2000,
        showProgressBar: true
      }
    });
    observer.complete();
  }
}
