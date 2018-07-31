import { Component, OnInit } from '@angular/core';
import {TrelloService} from '../../trello-service/trello-api/trello.service';
import {HttpClient} from '@angular/common/http';
import {TrelloAuthService} from '../../trello-service/trello-auth/trello-auth.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {

  constructor(private http: HttpClient, private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {}

  async ngOnInit() {
  }

  logout() {
    this.trelloAuthService.logout();
  }

}
