import { DatabaseGeneralComponent } from './../components/content/database/database-general/database-general.component';
import { DatabaseComponent } from './../components/content/database/database.component';
import { ForgotPasswordComponent } from './../components/content/forgot-password/forgot-password.component';
import { RankingsComponent } from './../components/content/info/rankings/rankings.component';
import { RulesComponent } from './../components/content/info/rules/rules.component';
import { SignOutComponent } from './../components/content/sign-out/sign-out.component';
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
import { AdminNewsFormComponent } from '../components/content/admin-news-form/admin-news-form.component';
import { AdminFaqsIndexComponent } from '../components/content/admin-faqs-index/admin-faqs-index.component';
import { AdminFaqsFormComponent } from '../components/content/admin-faqs-form/admin-faqs-form.component';
import { AdminFaqCategoriesIndexComponent } from '../components/content/admin-faq-categories-index/admin-faq-categories-index.component';
import { AdminFaqCategoriesFormComponent } from '../components/content/admin-faq-categories-form/admin-faq-categories-form.component';
import { FaqsComponent } from '../components/content/faqs/faqs.component';
import { AdminGuard } from '../guards/admin.guard';
import { ServerComponent } from '../components/content/info/server/server.component';
import { NpcsComponent } from '../components/content/info/npcs/npcs.component';
import { DefaultComponent } from '../components/modules/default/default.component';
import { RecoverPasswordComponent } from '../components/content/recover-password/recover-password.component';
import { PlayersComponent } from '../components/content/database/players/players.component';
import { GuildsComponent } from '../components/content/database/guilds/guilds.component';
import { GuildViewComponent } from '../components/content/database/guilds/view/view.component';
import { DatabaseCardsComponent } from '../components/content/database/database-cards/database-cards.component';
const appRoutes: Routes = [
  
  {
    path: 'admin', 
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'news', component: AdminNewsIndexComponent },
      { path: 'news/create', component: AdminNewsFormComponent },
      { path: 'news/:id', component: AdminNewsFormComponent },
      { path: 'faqs', component: AdminFaqsIndexComponent },
      { path: 'faqs/create', component: AdminFaqsFormComponent },
      { path: 'faqs/:id', component: AdminFaqsFormComponent },
      { path: 'faqs-categories', component: AdminFaqCategoriesIndexComponent },
      { path: 'faqs-categories/create', component: AdminFaqCategoriesFormComponent },
      { path: 'faqs-categories/:id', component: AdminFaqCategoriesFormComponent }
    ]
  },
  {
    path: 'default', 
    component: DefaultComponent,
    children: [
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'recover-password', component: RecoverPasswordComponent }
    ]
  },
  { 
    path: '', 
    component: BasicComponent,
    children: [
      { path: '', component: HomeComponent },
      { 
        path: 'info', 
        component: InfoComponent,
        children: [
          { path: '', component: ServerComponent },
          { path: 'server', component: ServerComponent },
          { path: 'npcs', component: NpcsComponent },
          { path: 'rules', component: RulesComponent },
          { path: 'rankings', component: RankingsComponent },
        ]
      },
      { 
        path: 'database', 
        component: DatabaseComponent,
        children: [
          { path: '', component: DatabaseGeneralComponent },
          { path: 'cards', component: DatabaseCardsComponent },
          { path: 'general', component: DatabaseGeneralComponent },
          { path: 'guilds', component: GuildsComponent },
          { path: 'players', component: PlayersComponent },
        ]
      },
      { path: 'discord', component: DiscordComponent },
      { path: 'donate', component: DonateComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-out', component: SignOutComponent },
      { path: 'faqs', component: FaqsComponent },
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