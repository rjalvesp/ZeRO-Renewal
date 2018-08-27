import { CharactersService } from './../../../../services/character.service';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobClass } from '../../../../models/class';
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
            this.items = resp.data;
            console.log(resp.data);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'name' }, { data: 'base_level' }, {data: 'job_level'}, {data: 'sex'} ]
    };
  }

}
