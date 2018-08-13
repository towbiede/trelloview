import { Component, OnInit } from '@angular/core';
import { TrelloAuthService } from '../../trello-service/trello-auth/trello-auth.service';
import { TrelloService } from '../../trello-service/trello-api/trello.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Trello} from '../../../trello';

import Cards = Trello.Cards;
import {catchError} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bId: string;
  private apiKey: string;
  private apiToken: string;
  /**private apiURL = 'https://api.trello.com/1/members/me/boards?key=' + this.apiKey + '&token=' + this.apiToken;*/

  data: any = {};
  boards: any;
  cards: any;
  lists: any;
  cBoard: any;
  selectedList: any;

  constructor(private http: HttpClient, private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {}

  getBoards() {
    return this.http.get('https://api.trello.com/1/members/me/boards').subscribe(data => {
      this.boards = data;
    });
  }

  getCardsByBoardId(boardId: string) {
    this.bId = boardId;
    const getCardsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/cards'
    return this.http.get(getCardsUrl).subscribe(data => {
      this.cards = data;
    });
  }

  getListsByBoardId(boardId: string) {
    this.bId = boardId;
    const getListsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/lists'
    return this.http.get(getListsUrl).subscribe(data => {
      this.lists = data;
    });
  }

  getCurrentBoard(boardId: string) {
    return this.http.get('https://api.trello.com/1/boards/' + boardId).subscribe(data => {
      this.cBoard = data;
    });
  }

  setList(listId: string) {
    return this.http.get('https://api.trello.com/1/lists/id' + listId).subscribe(data => {
      this.selectedList = data;
    });
  }


  /**
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  addCardToList (newCard: Cards): Observable<Cards> {
    return this.http.post<Cards>('https://api.trello.com/1/cards?idList='+this.selectedList, newCard, httpOptions)
      .pipe(
        catchError(this.handleError('addCardToList', newCard))
      );
  }
   **/



  ngOnInit() {
    this.getBoards();
  }

  logout() {
    this.trelloAuthService.logout();
  }

}
