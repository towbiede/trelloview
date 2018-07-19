import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { VisualComponent } from './visual/visual.component';
import { AppRoutingModule } from './/app-routing.module';
import { TrelloAuthModule } from './TrelloAuth/trello-auth/trello-auth.module';
import { TrelloApiModule } from './TrelloAuth/trello-api/trello-api.module';
import { SetTokenModule } from './TrelloAuth/set-token/set-token.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    VisualComponent
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
