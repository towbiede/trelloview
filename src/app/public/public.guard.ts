import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TrelloAuthService} from '../trello-service/trello-auth/trello-auth.service';

@Injectable()
export class PublicGuard implements CanActivate {


  constructor(private router: Router, private authService: TrelloAuthService){

  }

  canActivate(): boolean {
    if (this.authService.getToken()) {
      this.router.navigate(['private']);
      return false;
    } else {
      return true;
    }
  }

}
