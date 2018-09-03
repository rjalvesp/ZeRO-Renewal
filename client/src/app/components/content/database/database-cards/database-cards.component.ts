import { Observable } from 'rxjs';
import { SnotifyService } from 'ng-snotify';
import { ItemsService } from './../../../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database-cards',
  templateUrl: './database-cards.component.html',
  styleUrls: ['./database-cards.component.scss']
})
export class DatabaseCardsComponent implements OnInit {

  items: Array<{id: number, total: number}> = [];
  constructor(
    private itemsService: ItemsService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
    
    this.snotifyService.async('Fetching Data...', 
        Observable.create(observer => {
          this.itemsService.mvpCards().subscribe((response: any)=>{
            this.items = response;
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
  }

}
