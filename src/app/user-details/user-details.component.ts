import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Apollo} from 'apollo-angular';
import * as Query from '../global-queries';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user;
// todo сделать возможность добавлять коммент и открывать

  constructor(private apollo: Apollo, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    const login = this.route.snapshot.paramMap.get('login');
    console.log(login);
    this.getUserInfo(login);

  }

  getUserInfo(login) {
    this.apollo.query(
      {
        query: Query.getUserInfo,
        variables: {
          login: login
        }
      }).subscribe(res => {
      console.log(res);
      this.user = res.data['user'];
    });
  }

}
