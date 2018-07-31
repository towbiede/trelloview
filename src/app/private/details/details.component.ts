import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TrelloService} from '../../trello-service/trello-api/trello.service';
import {TrelloAuthService} from '../../trello-service/trello-auth/trello-auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private http: HttpClient, private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {}

  async ngOnInit() {

  }

  logout() {
    this.trelloAuthService.logout();
  }

}
