import { AdminComponent } from './../components/modules/admin/admin.component';
import { BasicComponent } from './../components/modules/basic/basic.component';
import { SignUpComponent } from './../components/content/sign-up/sign-up.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './../components/content/home/home.component';
import { DiscordComponent } from '../components/content/discord/discord.component';
import { SignInComponent } from '../components/content/sign-in/sign-in.component';
import { DownloadsComponent } from '../components/content/downloads/downloads.component';
import { DonateComponent } from '../components/content/donate/donate.component';
import { InfoComponent } from '../components/content/info/info.component';
import { ProfileComponent } from '../components/content/profile/profile.component';
import { NewsComponent } from '../components/content/news/news.component';
import { AdminNewsIndexComponent } from '../components/content/admin-news-index/admin-news-index.component';
const appRoutes: Routes = [
  
  {
    path: 'admin', 
    component: AdminComponent,
    
    children: [
      { path: 'news', component: AdminNewsIndexComponent }
    ]
  },
  { 
    path: '', 
    component: BasicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'info', component: InfoComponent },
      { path: 'discord', component: DiscordComponent },
      { path: 'donate', component: DonateComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '**',  redirectTo: '' }
    ]
  }
];

  
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [ RouterModule ],
    providers: [ ]
  })
export class AppRoutingModule {}