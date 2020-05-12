import { NegateauthGuard } from './_guards/negateauth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestAddComponent } from './request-add/request-add.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'request-list',
    component: RequestListComponent,
    canActivate: [AuthGuard],
    data: { title: 'List of Requests' }
  },
  {
    path: 'request-add',
    component: RequestAddComponent,
    canActivate: [NegateauthGuard],
    data: { title: 'Request Entry form' }
  },
  {
    path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
