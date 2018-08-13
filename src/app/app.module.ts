import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TrelloServiceModule} from './trello-service/trello-service.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './private/dashboard/dashboard.component';
import {DetailsComponent} from './private/details/details.component';
import {VisualComponent} from './private/visual/visual.component';
import {AppRoutingModule} from './/app-routing.module';
import {PrivateComponent} from './private/private.component';
import {PublicComponent} from './public/public.component';
import {PublicGuard} from './public/public.guard';
import {PrivateGuard} from './private/private.guard';
import { ChartsModule } from 'ng2-charts';


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
    TrelloServiceModule,
    ChartsModule
  ],
  providers: [PrivateGuard, PublicGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
