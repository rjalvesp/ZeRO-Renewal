import { DataTableDirective } from 'angular-datatables';
import { JobClass } from './../../../../models/class';
import { SnotifyService } from 'ng-snotify';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../../../../services/character.service';
import { Observable } from 'rxjs/Observable';
import { DataTableResponse } from '../../../../models/data-table-response.model';
import { JobClassCollection } from '../../../../models/class-collection';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-database-general',
  templateUrl: './database-general.component.html',
  styleUrls: ['./database-general.component.scss']
})
export class DatabaseGeneralComponent implements OnInit {

  dashboard: any = {};
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  items: Array<any>;
  constructor(
    private charactersService : CharactersService, 
    private snotifyService: SnotifyService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.snotifyService.async('Fetching Data...', 
        Observable.create(observer => {
          this.charactersService.dashboard().subscribe((response: any)=>{
            this.dashboard = response;
            observer.next({
              title: 'Completed',
              body: 'Data Fetched',
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


      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 126,
        serverSide: true,
        processing: true,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          this.http
            .post<DataTableResponse>(
              this.charactersService.urlViewsClass,
              dataTablesParameters
            ).subscribe((resp: any) => {
              this.items = resp.data;
              callback({
                recordsTotal: resp.recordsTotal,
                recordsFiltered: resp.recordsFiltered,
                data: []
              });
            });
        },
        columns: [{ data: 'name' }, { data: 'class' } ]
      };
  }

}
