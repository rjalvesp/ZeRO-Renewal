import { Store } from '@ngrx/store';
import { MenuItem } from './../../../models/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { MenuConditional } from '../../../models/menu-conditional.enum';
import { AppState } from '../../../store/states/state';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: Array<MenuItem> = [
    new MenuItem('fas fa-home', 'home', '', MenuConditional.default),
    new MenuItem('fas fa-info-circle', 'info', 'info', MenuConditional.default),
    new MenuItem('fab fa-discord', 'discord', 'discord', MenuConditional.default),
    new MenuItem('fas fa-user-plus', 'sign up', 'sign-up', MenuConditional.unlogged),
    new MenuItem('fas fa-sign-in-alt', 'sign in', 'sign-in', MenuConditional.unlogged),
    new MenuItem('fas fa-user', 'profile', 'profile', MenuConditional.logged),
    new MenuItem('fas fa-download', 'downloads', 'downloads', MenuConditional.default),
    new MenuItem('fas fa-donate', 'donate', 'donate', MenuConditional.default)
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
      return i.url === url.substr(1);
    })
  }

}
