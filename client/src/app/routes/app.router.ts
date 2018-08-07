import { SignUpComponent } from './../components/content/sign-up/sign-up.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './../components/content/home/home.component';
import { DiscordComponent } from '../components/content/discord/discord.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'discord', component: DiscordComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: '**',  redirectTo: '' }
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