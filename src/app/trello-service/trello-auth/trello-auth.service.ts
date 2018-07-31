import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TRELLO_STORAGE_KEY } from './trello-token-key';


@Injectable( )
export class TrelloAuthService {



  public token: string;
  public apiKey: string;

  constructor(private  router: Router) {
    this.token = localStorage.getItem(TRELLO_STORAGE_KEY);
  }

  getToken(): string | undefined {
    return localStorage.getItem(TRELLO_STORAGE_KEY);
  }

  setToken(token: string): void {
    return localStorage.setItem(TRELLO_STORAGE_KEY, token);
}
  login() {
    window.location.href = this.assembleUrl();
  }


  assembleUrl(): string {
    const returnUrl = encodeURI (  window.location.href + 'set-token');
    return 'placeholder';
  }

  /**
   * Logout, guards are responsible to redirect
   */

  async logout(): Promise<void>{
    localStorage.removeItem(TRELLO_TOKEN_KEY);
    await this.router.navigate(['/']);
  }

}



