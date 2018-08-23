import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { LunchService } from '../services/lunch.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-show-lunch-order',
  templateUrl: './show-lunch-order.component.html',
  styleUrls: ['./show-lunch-order.component.css']
})
export class ShowLunchOrderComponent implements OnInit {

  currentOrderList: Order[] = [];
  displayedColumns: string[] = ['dish', 'hungry'];
  emptyTable :  boolean = true;

  constructor(private lunchService: LunchService) { }


  ngOnInit() {
    this.lunchService.getOrders().subscribe(
    (orders) => {
      this.currentOrderList = orders;
      this.checkEmptyTable();
      console.log(this.currentOrderList);
    }
    (error)=>{
      this.checkEmptyTable();
      console.log('there was an error');
    });
  }

  refresh(){
    this.ngOnInit();
  }

  private checkEmptyTable(){
    if(this.currentOrderList.length !== 0){
      this.emptyTable = false;
    }
  }

  downloadCSV():void{
    let date = new Date();
    let month: number = date.getMonth();
    let dateString: string = date.getDate() + '-' + (month + 1) + '-' + date.getFullYear();
    new Angular5Csv(this.currentOrderList, 'Order-' + dateString + '.txt');
  }

}
