import { Component, OnInit } from '@angular/core';
import {TrelloService} from '../trello-service/trello-api/trello.service';
import {TrelloAuthService} from '../trello-service/trello-auth/trello-auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  user: any;
  username: string;
  avatarImg: string;
  userUrl: string;

  constructor(private http: HttpClient, private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {}

  getCurrentUser() {
    return this.http.get('https://api.trello.com/1/members/me?fields=all').subscribe(data => {
      this.user = data;
      console.log(data);
      this.username = this.user.username;
      this.avatarImg = 'https://trello-avatars.s3.amazonaws.com/' + this.user.avatarHash + '/170.png';
      this.userUrl = this.user.url;
    });
  }

  getUserName(): string {
    return this.username;
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  logout() {
    this.trelloAuthService.logout();
  }

}
