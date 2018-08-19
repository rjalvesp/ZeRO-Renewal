import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news.model';

@Component({
  selector: 'app-admin-news-form',
  templateUrl: './admin-news-form.component.html',
  styleUrls: ['./admin-news-form.component.scss']
})
export class AdminNewsFormComponent implements OnInit {
  model: News = new News({});
  constructor() { }

  ngOnInit() {
  }

}
