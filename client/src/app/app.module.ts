import { AuthService } from './services/auth.service';
import { TokenReducer } from './store/reducers/token.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { DataTablesModule } from 'angular-datatables';
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
import { ProfileComponent } from './components/content/profile/profile.component';
import { NewsComponent } from './components/content/news/news.component';
import { BasicComponent } from './components/modules/basic/basic.component';
import { AdminComponent } from './components/modules/admin/admin.component';
import { AdminMenuComponent } from './components/layout/admin-menu/admin-menu.component';
import { AdminNewsFormComponent } from './components/content/admin-news-form/admin-news-form.component';
import { AdminNewsIndexComponent } from './components/content/admin-news-index/admin-news-index.component';
import { FaqsService } from './services/faqs.service';
import { NewsService } from './services/news.service';
import { AdminFaqsIndexComponent } from './components/content/admin-faqs-index/admin-faqs-index.component';
import { AdminFaqsFormComponent } from './components/content/admin-faqs-form/admin-faqs-form.component';
import { AdminFaqCategoriesIndexComponent } from './components/content/admin-faq-categories-index/admin-faq-categories-index.component';
import { AdminFaqCategoriesFormComponent } from './components/content/admin-faq-categories-form/admin-faq-categories-form.component';
import { FaqsCategoriesService } from './services/faqs-categories.service';


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
    InfoComponent,
    ProfileComponent,
    NewsComponent,
    BasicComponent,
    AdminComponent,
    AdminMenuComponent,
    AdminNewsFormComponent,
    AdminNewsIndexComponent,
    AdminFaqsIndexComponent,
    AdminFaqsFormComponent,
    AdminFaqCategoriesIndexComponent,
    AdminFaqCategoriesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SnotifyModule,
    DataTablesModule,
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
    UsersService,
    FaqsService,
    FaqsCategoriesService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
