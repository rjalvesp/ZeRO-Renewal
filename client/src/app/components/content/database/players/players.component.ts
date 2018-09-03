import { JobClass } from './../../../../../../../server/classes/class';
import { CharactersService } from './../../../../services/character.service';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobClassCollection } from '../../../../models/class-collection';
import { DataTableResponse } from '../../../../models/data-table-response.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  classes: Array<JobClass> = JobClassCollection.items;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  items: Array<any>;
  selectedItem: number = -1;
  constructor(
    private http: HttpClient, 
    private charactersService: CharactersService
  ) {
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
            this.charactersService.urlViewsClass + '/' + this.selectedItem,
            dataTablesParameters
          ).subscribe((resp: any) => {
            this.items = resp.data.map((item: any)=>{
                item.className = this.classes.find((jobClass: JobClass)=>{ return jobClass.id === item.class;}).name;
                return item;
            });
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'name' }, { data: 'class' }, { data: 'base_level' }, {data: 'job_level'}, {data: 'sex'} ]
    };
  }
  onChange() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
}
