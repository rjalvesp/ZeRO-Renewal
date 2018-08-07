import { Component, OnInit } from '@angular/core';
import { SignUpModel } from '../../../models/sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  recaptcha: string = '6LcLrmgUAAAAAN9BknE-6Xtinc0IWFRJHO5y2FK9';
  model: SignUpModel = new SignUpModel({});
  constructor() { }

  ngOnInit() {
  }
}
