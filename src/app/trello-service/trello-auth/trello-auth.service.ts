import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TRELLO_STORAGE_KEY } from './trello-storage-key';


@Injectable()
export class TrelloAuthService {

  public token: string;
  public apiKey: '9dc8960d3015fee5599a539e20a2d91d';

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
    return 'https://trello.com/1/authorize?response_type=token&key=' + this.apiKey +
      '&return_url=' + returnUrl +
      '&callback_method=fragment&scope=read&expiration=never&name=Angular-TrelloView-App';
  }

  /**
   * Logout, guards are responsible to redirect
   */

  async logout(): Promise<void> {
    localStorage.removeItem(TRELLO_STORAGE_KEY);
    await this.router.navigate(['/']);
  }

}



