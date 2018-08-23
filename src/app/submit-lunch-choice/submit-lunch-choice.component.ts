import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { LunchMessage } from '../model/lunch-message';
import { LunchService } from '../services/lunch.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-submit-lunch-choice',
  templateUrl: './submit-lunch-choice.component.html',
  styleUrls: ['./submit-lunch-choice.component.css']
})
export class SubmitLunchChoiceComponent implements OnInit {

  lunchChoice: string = '';
  lunchSent: boolean = false;

  constructor(private lunchService: LunchService, matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submitLunchChoice(){
    let lunchMessage: LunchMessage = new LunchMessage();
    lunchMessage.message = this.lunchChoice;
    this.lunchService.sendLunchMenu(lunchMessage).subscribe(
    (any) => {this.matSnackBar.open('Done', '', {
      duration: 2000,
      });
    });
  }

}
