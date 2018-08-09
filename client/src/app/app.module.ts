import { TokenReducer } from './store/reducers/token.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { environment } from '../environments/environment'; // Angular CLI environemnt

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
import { StatusService } from './services/status.service';
import { TimezoneReducer } from './store/reducers/timezone.reducer';
import { OnlineReducer } from './store/reducers/online.reducer';
import { StatusReducer } from './store/reducers/status.reducer';


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
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    StoreModule.forRoot({timezone: TimezoneReducer, token: TokenReducer, online: OnlineReducer, status: StatusReducer}),
    
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
