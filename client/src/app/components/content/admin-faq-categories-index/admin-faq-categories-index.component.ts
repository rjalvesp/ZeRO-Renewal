import { AppState } from './../../../store/states/state';
import { SnotifyService } from 'ng-snotify';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataTableResponse } from '../../../models/data-table-response.model';
import { Router } from '@angular/router';
import * as sweetalert from 'sweetalert';
import { Store } from '@ngrx/store';
import { Token } from '../../../models/token.model';
import { FaqCategory } from '../../../models/faq-category.model';
import { FaqsCategoriesService } from '../../../services/faqs-categories.service';


@Component({
  selector: 'app-admin-faq-categories-index',
  templateUrl: './admin-faq-categories-index.component.html',
  styleUrls: ['./admin-faq-categories-index.component.scss']
})
export class AdminFaqCategoriesIndexComponent implements OnInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  items: Array<FaqCategory>;
  swal : any = sweetalert;
  token: Token;
  constructor(
    private router: Router,
    private store: Store<AppState>, 
    private http: HttpClient, 
    private faqsService: FaqsCategoriesService,
    private snotifyService: SnotifyService
  ) {
    this.store.select('token').subscribe((token: Token)=>{
      this.token = token;
    });
  }

  ngOnInit() {
    
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      serverSide: true,
      processing: true,
      responsive: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTableResponse>(
            this.faqsService.baseUrl + '/datatable',
            dataTablesParameters, 
            {
              headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token.token
              })
            }
          ).subscribe((resp: any) => {
            this.items = resp.data.map((data)=>{ return new FaqCategory(data)});
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, {data: 'name'}, {data: 'id'} ]
    };
  }

  GoTo(value: string){
    if (!value) return this.router.navigate(['/admin/faqs-categories/create'])
    return this.router.navigate(['/admin/faqs-categories/' + value]);
  }


  Delete(id: number){
    
    this.swal({
      text: 'Are you sure?',
      buttons: [true, true],
    }).then((value)=>{
      if (!value) return;
      this.snotifyService.async('Deleting Faq Category...', 
        Observable.create(observer => {
          this.faqsService.delete(id).subscribe(()=>{
            this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.ajax.reload();
            });
              
            observer.next({
              title: 'Complete',
              body: 'Faq Category Deleted!',
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
    });
  }

}
