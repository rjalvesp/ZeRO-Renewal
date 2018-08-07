import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';


import { AppComponent } from './app.component';
import { BaseComponent } from './components/layout/base/base.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { HomeComponent } from './components/content/home/home.component';
import { AppRoutingModule } from './routes/app.router';
import { DiscordComponent } from './components/content/discord/discord.component';
import { SignUpComponent } from './components/content/sign-up/sign-up.component';
import { SignInComponent } from './components/content/sign-in/sign-in.component';
import { DownloadsComponent } from './components/content/downloads/downloads.component';
import { DonateComponent } from './components/content/donate/donate.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    MenuComponent,
    HomeComponent,
    DiscordComponent,
    SignUpComponent,
    SignInComponent,
    DownloadsComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
