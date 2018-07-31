import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TrelloAuthService } from '../trello-auth/trello-auth.service';
import { _throw } from 'rxjs/observable/throw';

/**
 * This interceptor adds your api key and the users trello auth token to every http request.
 * Watch out: when you make http calls to other origin then trello you'll leak your users private
 * token. Then you'll need to add a url check in the intercept method!
 * */
@Injectable()
export class TokenInterceptor {

  constructor(public trelloAuthService: TrelloAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.trelloAuthService.getToken();
    if (!token) {
      return _throw('Couldn\'t connect to Trello API since no token was provided!');
    }

    request = request.clone({
      setParams: {
        token: this.trelloAuthService.getToken(),
        key: this.trelloAuthService.apiKey,
      }
    });

    return next.handle(request);
  }
}
