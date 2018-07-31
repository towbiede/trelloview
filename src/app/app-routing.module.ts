import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrivateComponent} from './private/private.component';
import {PublicComponent} from './public/public.component';
import {PRIV_ROUTES} from './private/private.routes';


const routes: Routes = [
  {path: 'private', component: PrivateComponent, children: PRIV_ROUTES},
  {path: '', component: PublicComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
