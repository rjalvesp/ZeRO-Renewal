import { Component } from '@angular/core';
import { StatusService } from './services/status.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private statusService: StatusService){
    this.statusService.timezone().subscribe(()=>{});
    
    timer(0,30000).subscribe(()=>{
      this.statusService.online().subscribe(()=>{});
    })
    timer(0,30000).subscribe(()=>{
      this.statusService.info().subscribe(()=>{});
    })
  }
}
