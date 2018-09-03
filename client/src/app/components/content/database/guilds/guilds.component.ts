import { Guild } from './../../../../models/guilds.model';
import { HttpClient } from '@angular/common/http';
import { GuildsService } from './../../../../services/guilds.service';
import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableResponse } from '../../../../models/data-table-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})
export class GuildsComponent implements OnInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  items: Array<any>;
  showGuild: boolean = false;
  selectedGuild: Guild;
  constructor(
    private http: HttpClient, 
    private guildsService: GuildsService,
    private router: Router
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
            this.guildsService.baseUrl + '/datatable',
            dataTablesParameters
          ).subscribe((resp: any) => {
            this.items = resp.data.map((item: any)=>{
              return new Guild(item);
            });
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [ { data: 'name' }, { data: 'guild_lv' }, { data: 'average_lv' }, { data: 'master' }, { data: 'max_member' }, { data: 'guild_id' }, { data: 'guild_id' }]
    };
  }
  goTo(id: number){
    this.showGuild = true;
    this.guildsService.get(id).subscribe((item)=>{
      this.selectedGuild = new Guild(item);
    })
  }
  onClose(closed: boolean){
    this.showGuild = false;
    this.selectedGuild = null;
  }
}
