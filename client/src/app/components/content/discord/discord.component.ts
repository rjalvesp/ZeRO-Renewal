import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.scss']
})
export class DiscordComponent implements OnInit {

  url: string = 'https://discord.gg/mD5ApD3';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goDiscord(){
    window.location.href = this.url;
  }
}
