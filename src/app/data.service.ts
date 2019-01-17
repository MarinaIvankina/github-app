import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Apollo} from 'apollo-angular';

@Injectable()
export class DataService {

  // todo: in env variables
  token = 'ead235b985764cce419df4cad756bfb4f38efbb3';

  options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  };

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getUserParams(): Observable<any> {
    return this.http.get('https://api.github.com/user', this.options);
  }

}
