import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {TRELLO_TOKEN_KEY} from "./trello-token-key";
import {Promise} from "q";


@Injectable( )
export class TrelloAuthService {



  public token: string;
  public apiKey: string = 'key';

  constructor(private  router: Router) {
    this.token = localStorage.getItem(TRELLO_TOKEN_KEY);
  }





  getToken(): string | undefined {
    return localStorage.getItem(TRELLO_TOKEN_KEY);
  }

setToken(token:string) : void {
    return localStorage.setItem(TRELLO_TOKEN_KEY, token)
}
  login(){
    window.location.href = this.assembleUrl();
  }


  assembleUrl() : string {
    const returnUrl = encodeURI (  window.location.href + 'set-token');
    return 'placeholder'
  }

  /**
   * Logout, guards are responsible to redirect
   */

  async logout(): Promise<void>{
    localStorage.removeItem(TRELLO_TOKEN_KEY);
    await this.router.navigate(['/']);
  }

}



