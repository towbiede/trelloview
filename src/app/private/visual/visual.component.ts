import { Component, OnInit } from '@angular/core';
import {TrelloService} from '../../trello-service/trello-api/trello.service';
import {HttpClient} from '@angular/common/http';
import {TrelloAuthService} from '../../trello-service/trello-auth/trello-auth.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {

  data: any;
  boards: any ;
  lists: any;
  cards: any;
  boardNumber: number = 0;
  listNumber: number = 0;
  cardNumber: number = 0;




  constructor(private http: HttpClient, private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {  }


  /**
   * This is just a TestChart
   */

    // DoughnutChart
  public doughnutChartLabels: string[] = ['Cards', 'Lists', 'Boards'];
  public doughnutChartData: number[] = [1,1,1];
  public doughnutChartType: string = 'doughnut';


  public getNumbers() {

    //get all boards
    this.http.get('https://api.trello.com/1/members/me/boards').subscribe(data => {
      this.boards = data;

      //iterate to count the boards and set ChartData to the amount of boards, and get every list in every single board
      for(let board of this.boards){
        this.boardNumber = this.boardNumber +1;

        this.http.get('https://api.trello.com/1/boards/' + board.id + '/lists').subscribe(data => {
          this.lists = data;

               // iterate lists
          for(let list of this.lists){
            this.listNumber = this.listNumber + 1;


            this.http.get('https://api.trello.com/1/lists/' + list.id + '/cards').subscribe(data => {
              this.cards = data;

               // iterate cards
              for(let card of this.cards){
                this.cardNumber = this.cardNumber + 1;
              }

              this.doughnutChartData[0] = this.cardNumber;
            });


          }

          this.doughnutChartData[1] = this.listNumber;
        });


      }
      this.doughnutChartData[2] = this.boardNumber;

    });




    this.http.get('https://api.trello.com/1/members/me/lists').subscribe(data => {
      this.lists = data;
      for(let list of this.lists){
        this.listNumber = this.listNumber+1;
      }
      this.doughnutChartData[1] = this.listNumber;
    });

    this.http.get('https://api.trello.com/1/members/me/cards').subscribe(data => {
      this.cards = data;
      for(let card of this.cards){
        this.cardNumber = this.cardNumber+1;
      }
      this.doughnutChartData[0] = this.cardNumber;
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
this.getNumbers();

  }

  logout() {
    this.trelloAuthService.logout();
  }

}
