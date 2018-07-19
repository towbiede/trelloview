import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrelloAuthService} from './';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TrelloAuthService,
  ]
})
export class TrelloAuthModule { }
