import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {RepositoryDetailsComponent} from './repository-details/repository-details.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:login', component: UserDetailsComponent },
  { path: 'repository/:login/:name', component: RepositoryDetailsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full'}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
