import { Status } from './../../../models/status.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../store/states/state';
import { Observable } from 'rxjs/Observable';
import * as Moment from 'moment';
import { timer } from 'rxjs';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  timezone: Observable<number>;
  zone: number = 0;
  online: number = 0;
  status: Status = new Status({});
  serverTime: string = '';
  loaded: boolean = false;
  constructor(private store: Store<AppState>) { 
    this.store.select('timezone').subscribe((zone: number) => {
      this.zone = zone;
    });
    store.select('online').subscribe((online: number) => {
      this.online = online;
    });
    store.select('status').subscribe((status: Status) => {
      console.log(status)
      this.status = status;
    });
  }

  ngOnInit() {
    timer(0,1000).subscribe(()=>{
      if (this.zone) this.loaded = true;
      this.serverTime = Moment().zone(this.zone).format('MMM D, HH:mm:ss');
    })
  }

}
