import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SignInModel } from '../../../models/sign-in.model';
import { SnotifyService } from '../../../../../node_modules/ng-snotify';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  model: SignInModel = new SignInModel({username: '', password: ''});
  recaptcha: string = '6LcLrmgUAAAAAN9BknE-6Xtinc0IWFRJHO5y2FK9';
  disabled: boolean = false;
  constructor(
    private authService : AuthService, 
    private snotifyService: SnotifyService,
    private route: Router
  ) { }

  ngOnInit() {
    
  }
  onSubmit() {
    this.disabled = true;
    this.snotifyService.async('Signing in...', 
      Observable.create(observer => {
        this.authService.login(this.model).subscribe(()=>{
          observer.next({
            title: 'Signed In',
            body: 'You logged in!',
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
            body: 'Invalid username or password',
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
