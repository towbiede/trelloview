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
  boards: any;
  lists: any;
  cards: any;
  boardNumber = 0;
  listNumber = 0;
  cardNumber = 0;


  constructor(private http: HttpClient, private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {

    this.getNumbers();

  }


  /**
   * This is just a TestChart
   */

  /** DoughnutChart **/
  public doughnutChartLabels: string[] = ['Cards', 'Lists', 'Boards'];
  public doughnutChartData: number[] = new Array(3 );
  public doughnutChartType = 'doughnut';



  public getNumbers() {

    /** get all boards **/
    this.http.get('https://api.trello.com/1/members/me/boards').subscribe(data => {
      this.boards = data;

      /** iterate to count the boards and set ChartData to the amount of boards, and get every list in every single board **/
      for (const board of this.boards) {
        this.boardNumber = this.boardNumber + 1;

        this.http.get('https://api.trello.com/1/boards/' + board.id + '/lists').subscribe(data => {
          this.lists = data;

          /** iterate lists **/
          for (const list of this.lists) {
            this.listNumber = this.listNumber + 1;


            this.http.get('https://api.trello.com/1/lists/' + list.id + '/cards').subscribe(data => {
              this.cards = data;

              /** iterate cards **/
              for (const card of this.cards) {
                this.cardNumber = this.cardNumber + 1;
              }
              /**  this.doughnutChartData.push(this.cardNumber);**/
           this.doughnutChartData[0] = this.cardNumber;
            });


          }
          /**     this.doughnutChartData.push(this.listNumber);**/
          this.doughnutChartData[1] = this.listNumber;
        });


      }

      /**    this.doughnutChartData.push(this.boardNumber);**/
 this.doughnutChartData[2] = this.boardNumber;

    });

    }


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
