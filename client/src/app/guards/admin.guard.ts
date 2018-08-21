import { UsersService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/state';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user: User = new User({});
  constructor(private store : Store<AppState>, private router: Router){
    this.store.select('user').subscribe((user: User)=>{
      this.user = user;
    })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.user.admin) { this.router.navigate(['']); return false; }
      return true;
  }
}
