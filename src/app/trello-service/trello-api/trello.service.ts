import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Trello } from '../../../trello';
import User = Trello.User;
import Cards = Trello.Cards;
import Boards = Trello.Boards;
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";
import {HandleError, HttpErrorHandler} from "../http-error-handler.service";
import {TrelloAuthService} from '../trello-auth/trello-auth.service';
import Lists = Trello.Lists;




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class TrelloService {

  private handleError: HandleError;
  private authService: TrelloAuthService;
  private apiKey: string;
  private apiToken: string;


  constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('Trello Service');
  }

  async getMe(): Promise<User> {
    return this.httpClient.get<User>('https://api.trello.com/1/members/me').toPromise();
  }

  /** GET Boards from Trello */
  getBoards() {
    return this.httpClient.get<Boards>('https://api.trello.com/1/members/me/boards')
      .pipe(
        catchError(this.handleError('getBoards'))
      );
  }

  getCardsByListId(listId: string) {
    return this.httpClient.get<Cards>('https://api.trello.com/1/lists/' + listId + '/cards')
      .pipe(
        catchError(this.handleError('getCardsByBoardId'))
      );
  }

  getListsByBoardId(boardId: string){

      return this.httpClient.get<Lists>( 'https://api.trello.com/1/boards/' +  boardId + '/lists').pipe(
        catchError(this.handleError('getListsByBoardId'))
      );
  }


  getCurrentBoard(boardId){
    return this.httpClient.get<Boards>('https://api.trello.com/1/boards/' + boardId).pipe(
      catchError(this.handleError('getCurrentBoard'))
    );
  }



  addCardToList ( list: Lists, card: Cards): Observable<Cards> {
    console.log('trello service addcardToList');
    alert(list.id);


   /**console.log(this.apiToken);
    httpOptions.headers.append('Authorization', this.authService.getToken());
**/
    return this.httpClient.post<Cards>('https://api.trello.com/1/cards?idList=' + list.id, card,httpOptions)
      .pipe(
        catchError(this.handleError('addCardToList',card ))


      );

  }

}
