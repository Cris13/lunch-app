import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { LunchService } from '../services/lunch.service';

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

  download(): void{
        let sJson = JSON.stringify(this.currentOrderList);
        let element = document.createElement('a');
        element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
        element.setAttribute('download', "order.txt");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
  }

}
