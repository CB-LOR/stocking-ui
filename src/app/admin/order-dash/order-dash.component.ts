import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdminService, Order } from '../admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'order-dash',
  templateUrl: './order-dash.component.html',
  styleUrls: ['./order-dash.component.scss']
})

export class OrderDashComponent implements OnInit {

  private orderSub: Subscription;
  public dataSource = {
    ordered: new Array<Order>(),
    prepared: new Array<Order>(),
    delivered: new Array<Order>(),
    returned: new Array<Order>(),
    orderedIndex: new Array<string>(),
    preparedIndex: new Array<string>(),
    deliveredIndex: new Array<string>(),
    returnedIndex: new Array<string>()
  };
  orderStatuses = [
    {val: 'ordered', label: 'Ordered'}, 
    {val: 'prepared', label: 'Prepared'},
    {val: 'delivered', label: 'Delivered'},
    {val: 'returned', label: 'Returned'}];
  orderStatusAction = {
    ordered: 1,
    prepared: 2,
    delivered: 3,
    returned: 3
  }
  status: string; 
  updateAction: number;
  showDataTable = false;
  tableData: Array<any>;
  public displayedColumns: string[] = ['orderAction', 'name', 'email', 'phone', 'pickup', 'stockings', 'message'];

  constructor(
    private ref: ChangeDetectorRef,
    private admin: AdminService) { }

  ngOnInit(): void {
    this.status = this.orderStatuses[0].val;
    this.updateAction = this.orderStatusAction[this.status];
    // setup subscription
    this.orderSub = this.admin.orderListObs.subscribe(orderRes => {
      orderRes.forEach(order => {
        // place orders in the correct arrays by status
        if(order.orderStatus === undefined) { // if no status, ordered
          this.dataSource.ordered.push(order);
          this.dataSource.orderedIndex.push(order.email);
        } else {
          this.dataSource[order.orderStatus].push(order);
          this.dataSource[order.orderStatus + 'Index'].push(order.email);
        }
      });
      this.tableData = this.dataSource[this.status];
      if(this.tableData.length != 0) {
        this.showDataTable = true;
        this.ref.detectChanges();
      }
    });
    this.admin.getReport();
  }

  onStatusChange(): void {
    this.updateAction = this.orderStatusAction[this.status];
    this.tableData = this.dataSource[this.status];
    this.showDataTable = this.tableData.length > 0;
    console.log(this.updateAction, this.status, this.showDataTable, this.tableData);
    this.ref.detectChanges();
  }

  updateOrderStatus(order: Order, orderStatus: string, curOrderStatus: string): void {
    this.admin.updateOrderStatus(order, orderStatus).subscribe(resp => {
      order.orderStatus = orderStatus;
      order.order_ts = resp.order_ts;
      console.log(order);
      // remove from current status
      let orderIndex = this.dataSource[curOrderStatus + 'Index'].indexOf(order.email);
      this.dataSource[curOrderStatus].splice(orderIndex, 1);
      // add to new status
      this.dataSource[orderStatus].push(order);
      this.dataSource[orderStatus + 'Index'].push(order.email);
      this.tableData = this.dataSource[this.status];
      this.ref.detectChanges();
    });
  }

}
