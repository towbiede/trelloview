import {Routes} from '@angular/router';
import {VisualComponent} from './visual/visual.component';
import {DetailsComponent} from './details/details.component';
import {DashboardComponent} from './dashboard/dashboard.component';


export const PRIV_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'visual',
    component: VisualComponent
  }
]
