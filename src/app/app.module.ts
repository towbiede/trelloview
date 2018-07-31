import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { DetailsComponent } from './private/details/details.component';
import { VisualComponent } from './private/visual/visual.component';
import { AppRoutingModule } from './/app-routing.module';
import { TrelloAuthModule } from './trello-service/trello-auth/trello-auth.module';
import { TrelloApiModule } from './trello-service/trello-api/trello-api.module';
import { SetTokenModule } from './trello-service/set-token/set-token.module';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    VisualComponent,
    PrivateComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TrelloAuthModule,
    TrelloApiModule,
    SetTokenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
