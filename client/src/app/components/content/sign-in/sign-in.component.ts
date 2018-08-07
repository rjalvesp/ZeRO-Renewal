import { Component, OnInit } from '@angular/core';
import { SignInModel } from '../../../models/sign-in.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  recaptcha: string = '6LcLrmgUAAAAAN9BknE-6Xtinc0IWFRJHO5y2FK9';
  model: SignInModel = new SignInModel({});
  constructor() { }

  ngOnInit() {
  }

}
