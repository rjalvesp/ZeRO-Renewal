import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/states/state';
import { UsersService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(private store: Store<AppState>, private usersService: UsersService) { }

  ngOnInit() {
    this.store.select('user').subscribe((user: User)=>{
      this.user = user;
    })
  }

}
