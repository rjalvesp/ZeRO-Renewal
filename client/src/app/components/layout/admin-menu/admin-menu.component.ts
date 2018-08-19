import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from './../../../models/menu-item.model';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { MenuConditional } from '../../../models/menu-conditional.enum';
import { AppState } from '../../../store/states/state';
import { User } from '../../../models/user.model';
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  items: Array<MenuItem> = [
    new MenuItem('fas fa-home', 'home', '/admin', MenuConditional.default),
    new MenuItem('fas fa-newspaper', 'news', '/admin/news', MenuConditional.default),
    new MenuItem('fas fa-question', 'faqs', '/admin/faqs', MenuConditional.default),
    new MenuItem('far fa-question-circle', 'faq categories', '/admin/faqs-categories', MenuConditional.default),
  ];
  selected: MenuItem = this.items[0];
  user: User;
  constructor(private router: Router, private route: ActivatedRoute, private store : Store<AppState>) {
    
  }

  ngOnInit() {
    this.load(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { 
        this.load(this.router.url);
      }
    });
    this.store.select('user').subscribe((user: User)=>{
      if (!user && !user.username) return;
      this.user = user;
      this.items.forEach((item: MenuItem)=>{
        item.user = this.user;
      })
    });
  }
  load(url: string) {
    this.selected = this.items.find((i: MenuItem)=>{
      let route = url.split('/');
      console.log(route.slice(0, 3).join('/'));
      return i.url === route.slice(0, 3).join('/');
    })
  }

}
