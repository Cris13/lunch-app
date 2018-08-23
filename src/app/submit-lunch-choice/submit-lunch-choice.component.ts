import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-lunch-choice',
  templateUrl: './submit-lunch-choice.component.html',
  styleUrls: ['./submit-lunch-choice.component.css']
})
export class SubmitLunchChoiceComponent implements OnInit {

  lunchChoice: string;

  constructor() { }

  ngOnInit() {
  }

  submitLunchChoice(){
    console.log('submitted');
  }

}
