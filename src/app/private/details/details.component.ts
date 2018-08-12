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
  data: any = {};
  boards: any;
  cards: any;
  lists: any;
  member: any;


  getBoards() {
    return this.http.get('https://api.trello.com/1/members/me/boards').subscribe(data => {
      this.boards = data;
    });
  }

  getCardsByBoardId(boardId: string) {
    this.bId = boardId;
    const getCardsUrl = 'https://api.trello.com/1/lists/' + this.bId + '/cards';
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


  getMemberByCardId(boardId: string) {
    this.bId = boardId;
    const getMembersUrl = 'https://api.trello.com/1/lists/' + this.bId + '/cards?fields=id,name,badges,labels';
    return this.http.get(getMembersUrl).subscribe(data => {
      this.member = data;

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
