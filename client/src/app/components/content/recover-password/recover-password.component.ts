import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {


  model: any = {};
  recaptcha: string = '6LcLrmgUAAAAAN9BknE-6Xtinc0IWFRJHO5y2FK9';
  disabled: boolean = false;
  constructor(
    private usersService : UsersService, 
    private snotifyService: SnotifyService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.queryParams.subscribe((params)=>{
      this.model.encoded = params.code;
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    this.disabled = true;
    this.snotifyService.async('Resetting Password...', 
      Observable.create(observer => {
        this.usersService.recoverPassword(this.model).subscribe(()=>{
          observer.next({
            title: 'Password Resetted',
            body: 'You can now log in with your new password!',
            config: {
              closeOnClick: true,
              timeout: 2000,
              showProgressBar: true
            }
          });
          observer.complete();
          this.disabled = false;
          this.router.navigate(['/']);
        }, (error: any)=>{
          observer.error({
            title: 'Error',
            body: 'Something wrong happened',
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