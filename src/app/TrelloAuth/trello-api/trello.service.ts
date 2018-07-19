import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trello } from '../../../';
import User = Trello.User;

@Injectable()
export class TrelloService {

  constructor(private httpClient: HttpClient) {}

  async getMe(): Promise<User> {
    return this.httpClient.get<User>('https://api.trello.com/1/members/me').toPromise();
  }

}
