import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Apollo} from 'apollo-angular';
import * as Query from '../global-queries';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {

  repository;
  issues;

  comments;

  constructor(private apollo: Apollo, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    const login = this.route.snapshot.paramMap.get('login');
    this.getRepositoryInfo(name, login);
  }

  getRepositoryInfo(name, login) {
    this.apollo.query(
      {
        query: Query.getRepositoryInfo,
        variables: {
          login: login,
          name: name
        }
      }).subscribe(res => {
      console.log(res);
      this.repository  = res.data['repositoryOwner']['repository'];
      console.log(this.repository);
      // this.issues = res.data['repositoryOwner']['repository']['issues']['edges'][0];
      // console.log(this.issues);
    });
  }

  addReaction(type, id) {
    console.log(type, id);
    this.apollo.mutate(
      {
        mutation: Query.addReaction,
        variables: {
          input: {
            clientMutationId: 'MDEyOklzc3VlQ29tbWVudDQzNjk2NTA2Nw==',
            subjectId: id,
            content: type
          }
        }
      }).subscribe(res => {
      console.log(res);
    });

  }


  back() {
    this.location.back();
  }
}
