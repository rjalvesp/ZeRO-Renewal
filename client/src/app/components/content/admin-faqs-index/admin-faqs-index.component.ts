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
import { FaqsService } from '../../../services/faqs.service';
import { Faq } from '../../../models/faq.model';

@Component({
  selector: 'app-admin-faqs-index',
  templateUrl: './admin-faqs-index.component.html',
  styleUrls: ['./admin-faqs-index.component.scss']
})
export class AdminFaqsIndexComponent implements OnInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  items: Array<Faq>;
  swal : any = sweetalert;
  token: Token;
  constructor(
    private router: Router,
    private store: Store<AppState>, 
    private http: HttpClient, 
    private faqsService: FaqsService,
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
            this.items = resp.data.map((data)=>{ return new Faq(data)});
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, {data: 'id'} ]
    };
  }

  GoTo(value: string){
    if (!value) return this.router.navigate(['/admin/faqs/create'])
    return this.router.navigate(['/admin/faqs/' + value]);
  }


  Delete(id: number){
    
    this.swal({
      text: 'Are you sure?',
      buttons: [true, true],
    }).then((value)=>{
      if (!value) return;
      this.snotifyService.async('Deleting Faq...', 
        Observable.create(observer => {
          this.faqsService.delete(id).subscribe(()=>{
            this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.ajax.reload();
            });
              
            observer.next({
              title: 'Complete',
              body: 'Faq Deleted!',
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
