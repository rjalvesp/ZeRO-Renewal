import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/states/state';
import * as UsersActions from '../../../store/actions/user.actions';
import * as TokenActions from '../../../store/actions/token.actions';
import { User } from '../../../models/user.model';
import { Token } from '../../../models/token.model';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new UsersActions.Store(new User({})));
    this.store.dispatch(new TokenActions.Store(new Token({})));
    this.router.navigate(['/']);
  }

}
