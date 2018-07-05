import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bId: string;
  private apiKey = '4c96a328e7ea9b34311ac6dade4d0b8d';
  private apiToken = '20b32bb9f9a12cb3d431232af241f628dbe5e661d340630928153984cc6b81ea';
  private apiURL = 'https://api.trello.com/1/members/me/boards?key=' + this.apiKey + '&token=' + this.apiToken;

  data: any = {};
  boards: any;
  cards: any;

  constructor(private http: HttpClient) {}

  getBoards() {
    return this.http.get(this.apiURL).subscribe(data => {
      this.boards = data;
    });
  }

  getCardsByBoardId(boardId: string) {
    this.bId = boardId;
    const getCardsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/cards?key=' + this.apiKey + '&token=' + this.apiToken;
    return this.http.get(getCardsUrl).subscribe(data => {
      this.cards = data;
    });
  }

  ngOnInit() {
    this.getBoards();
  }

}
