import { Component, OnInit } from '@angular/core';
import { TrelloAuthService } from '../../trello-service/trello-auth/trello-auth.service';
import { TrelloService } from '../../trello-service/trello-api/trello.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Trello} from '../../../trello';
import {Subscription} from 'rxjs/internal/Subscription';
import Cards = Trello.Cards;
import Boards = Trello.Boards;
import Lists = Trello.Lists;
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bId: string;
  data: any = {};
  boards: any;
  cards: any;
  lists: any;
  cBoard: any = null;
  selectedList: any;
  subscription: Subscription;

  constructor(private http: HttpClient , private trelloAuthService: TrelloAuthService, private trelloService: TrelloService, private activatedRoute: ActivatedRoute) {

  }

  private getBoards() {
    this.trelloService.getBoards().subscribe((data: Boards) => {
      this.boards = data;
    });
  }

/**
  getBoards() {
    return this.http.get('https://api.trello.com/1/members/me/boards').subscribe(data => {
      this.boards = data;
    });
  }
**/

getCardsByListId(listId: string) {

  this.trelloService.getCardsByListId(listId).subscribe((data: Cards) => this.cards = data);
console.log(this.cards);
}

/**
getCardsByBoardId(boardId: string) {
  this.bId = boardId;
  const getCardsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/cards';
  return this.http.get(getCardsUrl).subscribe(data => {
    this.cards = data;
  });
}**/

getListsByBoardId(boardId: string) {

  this.trelloService.getListsByBoardId(boardId).subscribe((data: Lists) => this.lists = data);

}

/**
  getListsByBoardId(boardId: string) {
    this.bId = boardId;
    const getListsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/lists';
    return this.http.get(getListsUrl).subscribe(data => {
      this.lists = data;
    });
  }**/

  getCurrentBoard(boardId: string) {

    this.trelloService.getCurrentBoard(boardId).subscribe((data: Boards) => this.cBoard = data);
}


/**
  getCurrentBoard(boardId: string) {
    return this.http.get('https://api.trello.com/1/boards/' + boardId).subscribe(data => {
      this.cBoard = data;
    });
  }**/

  getBoardName(): string {
    if (this.cBoard === null) {
      return '(No board selected)';
    } else {
      return this.cBoard.name;
    }
  }

  setList(listId: string) {
    return this.http.get('https://api.trello.com/1/lists/' + listId).subscribe(data => {
      this.selectedList = data;

    });
  }

  addCard(name: string) {
    const newCard: Cards = { name } as Cards;
    console.log('x' , this.selectedList);
    this.trelloService.addCardToList( this.selectedList, newCard).subscribe(card => this.cards.push(card));
  }



  ngOnInit() {
    this.getBoards();
   /** this.subscription = this.activatedRoute.queryParams.subscribe(
      (selectedBoard: Params) => {
        this.bId = selectedBoard['board-id'];
        this.getCurrentBoard(this.bId);
        this.getListsByBoardId(this.bId);
      },
      (error: any) => console.log('error', error)
    ); **/
  }

  logout() {
    this.trelloAuthService.logout();
  }

}
