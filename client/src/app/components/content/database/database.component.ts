import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  activeRoute: string = 'general';
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
    this.activeRoute = splittedRoute.length === 2? 'general' : splittedRoute[2];
    console.log(this.activeRoute);
  }

}
