import { AuthService } from './services/auth.service';
import { TokenReducer } from './store/reducers/token.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
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
import { UsersService } from './services/user.service';
import { UserReducer } from './store/reducers/user.reducer';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { InfoComponent } from './components/content/info/info.component';


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
    DonateComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SnotifyModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    StoreModule.forRoot({timezone: TimezoneReducer, token: TokenReducer, online: OnlineReducer, status: StatusReducer, user: UserReducer}),
    
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    AuthService,
    StatusService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
