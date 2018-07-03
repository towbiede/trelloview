import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { VisualComponent} from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
  {
    path: 'visual',
    component: VisualComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
