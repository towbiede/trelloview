import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SetTokenComponent} from './set-token/set-token.component';
import {TokenInterceptor} from './trello-api/token-interceptor';
import {TrelloAuthService} from './trello-auth/trello-auth.service';
import {TrelloService} from './trello-api/trello.service';
import {AppRoutingModule} from './trello-service.routing';
import {HttpErrorHandler} from './http-error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [SetTokenComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, TrelloAuthService, TrelloService, HttpErrorHandler]
})
export class TrelloServiceModule { }
