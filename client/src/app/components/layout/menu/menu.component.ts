import { MenuItem } from './../../../models/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: Array<MenuItem> = [
    new MenuItem('fas fa-home', 'home', ''),
    new MenuItem('fab fa-discord', 'discord', 'discord'),
    new MenuItem('fas fa-user-plus', 'sign up', 'sign-up'),
    new MenuItem('fas fa-sign-in-alt', 'sign in', 'sign-in'),
    new MenuItem('fas fa-download', 'downloads', 'downloads'),
    new MenuItem('fas fa-donate', 'donate', 'donate'),
  ];
  selected: MenuItem = this.items[0];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.load(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { 
        this.load(this.router.url);
      }
    });
  }
  load(url: string) {
    this.selected = this.items.find((i: MenuItem)=>{
      return i.url === url.substr(1);
    })
  }

}
