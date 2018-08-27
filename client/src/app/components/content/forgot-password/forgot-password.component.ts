import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { SnotifyService } from 'ng-snotify';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  model: {username: string; captcha: string} = {username: '', captcha: ''};
  captcha: string = '';
  recaptcha: string = '6LcLrmgUAAAAAN9BknE-6Xtinc0IWFRJHO5y2FK9';
  disabled: boolean = false;
  constructor(
    private usersService : UsersService, 
    private snotifyService: SnotifyService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.disabled = true;
    this.snotifyService.async('Sending Request to your email', 
      Observable.create(observer => {
        this.usersService.forgotPassword(this.model).subscribe(()=>{
          observer.next({
            title: 'Request Sent',
            body: 'A request have been sent to your email, if you don\'t see it in your mailbox try your spam folder',
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
            body: 'Invalid username or email',
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
