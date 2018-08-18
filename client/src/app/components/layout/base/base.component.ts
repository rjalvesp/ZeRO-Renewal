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

  constructor() { 
  }

  ngOnInit() {
  }

}
