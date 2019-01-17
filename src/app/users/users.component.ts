import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Apollo} from 'apollo-angular';
import * as Query from '../global-queries';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private apollo: Apollo, private location: Location) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apollo.query(
      {
        query: Query.getAllUser
      }).subscribe(res => {
      console.log(res);
      this.users = res.data['search'];

    });
  }

}
