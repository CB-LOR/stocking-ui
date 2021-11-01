import { Component, Input, OnInit } from '@angular/core';
import { AdminService, Order } from '../admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'order-dash',
  templateUrl: './order-dash.component.html',
  styleUrls: ['./order-dash.component.scss']
})
export class OrderDashComponent implements OnInit {

  private orderSub: Subscription;
  public dataSource: Order[];
  public displayedColumns: string[] = ['name', 'email', 'phone', 'pickup', 'stockings', 'message'];

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    
    this.orderSub = this.admin.orderListObs.subscribe(orderRes => {
      console.log('In comp: ', orderRes);
      this.dataSource = orderRes;
    });
    console.log("Calling api");
    this.admin.getReport();
  }

}
