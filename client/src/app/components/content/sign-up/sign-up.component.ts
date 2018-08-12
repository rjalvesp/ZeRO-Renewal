import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { SnotifyService } from 'ng-snotify';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  recaptcha: string = '6LcLrmgUAAAAAN9BknE-6Xtinc0IWFRJHO5y2FK9';
  model: User = new User({username: 'causante', email: 'rj@gmail.com', password: 'qwe123.A1', confirmPassword: 'qwe123.A1'});
  disabled: boolean = false;
  constructor(
    private usersService : UsersService, 
    private snotifyService: SnotifyService,
    private route: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.disabled = true;
    this.snotifyService.async('Signing up...', 
      Observable.create(observer => {
        console.log('123');
        this.usersService.add(this.model).subscribe((user: User)=>{
          if (!user) return;
          this.model = user;
          observer.next({
            title: 'Signed up',
            body: 'You are registered, now Log In!',
            config: {
              closeOnClick: true,
              timeout: 2000,
              showProgressBar: true
            }
          });
          observer.complete();
          this.disabled = false;
          this.route.navigate(['/']);
        }, (error: any)=>{
          observer.error({
            title: 'Error',
            body: 'Email or Username already registered',
            config: {
              closeOnClick: true,
              timeout: 2000,
              showProgressBar: true
            }
          });
          observer.complete();
          this.disabled = false;
        })
      })
    );
  }
}
