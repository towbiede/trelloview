import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TrelloAuthService} from '../trello-service/trello-auth/trello-auth.service';

@Injectable
export class PrivateGuard implements CanActivate {


  constructor(private router: Router, private authService: TrelloAuthService) {
  }

  canActivate(): boolean {
    const authToken: string = this.authService.getToken();
    if (authToken) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }


}
