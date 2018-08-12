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
  const user  = await this.trelloService.getMe();
  console.log('User:', user);
  this.getBoards();

  }

  /**
   * ANFANG
   * Test Wiese
   */

  bId: string;
  lId: string;
  chId: string;
  cardId: string;
  data: any = {};
  boards: any;
  cards: any;
  lists: any;
  members: any;
  labels: any;
  checklists: any;
  checkItems: any;



  getBoards() {
    return this.http.get('https://api.trello.com/1/members/me/boards').subscribe(data => {
      this.boards = data;
    });
  }

  getCardsByBoardId(listId: string) {
    this.lId = listId;
    const getCardsUrl = 'https://api.trello.com/1/lists/' + this.lId + '/cards';
    return this.http.get(getCardsUrl).subscribe(data => {
      this.cards = data;

    });
  }

  getListsByBoardId(boardId: string) {
    this.bId = boardId;
    const getListsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/lists';
    return this.http.get(getListsUrl).subscribe(data => {
      this.lists = data;
    });
  }

  getLabelByBoardId(boardId: string) {
    this.bId = boardId;
    const getListsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/labels/?fields=color&limit=2';
    return this.http.get(getListsUrl).subscribe(data => {
      this.labels = data;
    });
  }


  getChecklistByCardId(cardId: string) {
this.cardId = cardId;
    const getChecklistsUrl = 'https://api.trello.com/1/cards/' + this.cardId + '/checklists'   ;
    return this.http.get(getChecklistsUrl).subscribe(data => {
      this.checklists = data;

    });
  }

  getCheckItemsByChecklistId(checklistId: string) {
    this.chId = checklistId;
    const getChecklistsUrl = 'https://api.trello.com/1/checklists/' + this.chId + '/checkItems'   ;
    return this.http.get(getChecklistsUrl).subscribe(data => {
      this.checkItems = data;

    });
  }


  getMembersByBoardId(boardId: string) {
    this.bId = boardId;
    const getMembersUrl = 'https://api.trello.com/1/boards/' + this.bId + '/members' ;
    return this.http.get(getMembersUrl).subscribe(data => {
      this.members = data;

    });
  }

  /**
   * ENDE
   * Test Wiese
   */



  logout() {
    this.trelloAuthService.logout();
  }

}
