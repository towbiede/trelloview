import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrivateComponent} from './private/private.component';
import {PublicComponent} from './public/public.component';
import {PRIV_ROUTES} from './private/private.routes';
import {PrivateGuard} from './private/private.guard';
import {PublicGuard} from './public/public.guard';


const routes: Routes = [
  {path: 'private', canActivate: [PrivateGuard], component: PrivateComponent, children: PRIV_ROUTES},
  {path: '', canActivate: [PublicGuard], component: PublicComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
