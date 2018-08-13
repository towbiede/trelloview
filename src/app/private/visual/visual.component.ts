import { Component, OnInit } from '@angular/core';
import {TrelloService} from '../../trello-service/trello-api/trello.service';
import {HttpClient} from '@angular/common/http';
import {TrelloAuthService} from '../../trello-service/trello-auth/trello-auth.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient, private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {}


  /**
   * This is just a TestChart
   */

  // DoughnutChart
  public doughnutChartLabels: string[] = ['Cards', 'Lists', 'Boards'];
  public doughnutChartData: number[] = [35, 45, 10];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  async ngOnInit() {
  }

  logout() {
    this.trelloAuthService.logout();
  }

}
