import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  activeRoute: string = 'server';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.load(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { 
        this.load(this.router.url);
      }
    });
  }
  load(route: string){
    let splittedRoute = route.split('/');
    this.activeRoute = splittedRoute.length === 2? 'server' : splittedRoute[2];
  }
}
