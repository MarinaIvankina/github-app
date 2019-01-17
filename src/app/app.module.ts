import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {MainComponent} from './main/main.component';
import {DataService} from './data.service';
import { setContext } from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import {MatCardModule, MatListModule, MatTabsModule, MatButtonModule, MatDividerModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersComponent,
    UserDetailsComponent,
    RepositoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

  token = 'ead235b985764cce419df4cad756bfb4f38efbb3';
  authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: this.token ? `Bearer ${this.token}` : '',
      }
    };
  });
  httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: this.authLink.concat(this.httpLink),
      cache: new InMemoryCache()
    });
  }
}
