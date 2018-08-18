import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../../../models/status.model';
import { AppState } from '../../../store/states/state';
import * as Moment from 'moment';
import { timer } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

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
