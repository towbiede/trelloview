import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {TrelloAuthService} from '../trello-auth/trello-auth.service';
import {Router, ActivatedRoute} from '@angular/router';

/**
 * Probs to JM097, HdM-Stuttgart
 * Great work, ty! */

@Component({
  selector: 'app-set-token',
  templateUrl: './set-token.component.html',
  styleUrls: ['./set-token.component.scss']
})
export class SetTokenComponent implements OnInit, OnDestroy {

  private token: string;
  private fragSubscription: Subscription;

  constructor(private router: Router, private authService: TrelloAuthService, private aRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.fragSubscription = this.aRoute.fragment.subscribe(
      fragment => {
        if (fragment) {
          this.token = fragment.slice(6);
          this.authService.setToken(this.token);
          console.log(this.authService.getToken())
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.fragSubscription.unsubscribe();
  }

}

