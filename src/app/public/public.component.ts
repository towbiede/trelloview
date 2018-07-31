import { Component, OnInit } from '@angular/core';
import {TrelloAuthService} from '../trello-service/trello-auth/trello-auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private authService: TrelloAuthService) { }

  ngOnInit() {
    this.login();
  }

  login() {
    this.authService.login();
  }

}
