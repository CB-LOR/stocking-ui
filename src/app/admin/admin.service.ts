import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AdminService {

  private orderList: Order[] = new Array<Order>();
  public orderListObs: BehaviorSubject<Order[]>;
  private headers: HttpHeaders;
  private token: string;

  constructor(private http: HttpClient) {
    this.orderListObs = new BehaviorSubject<Order[]>(this.orderList);
  }

  public setToken(token: string): void {
    this.token = token;
    this.headers = new HttpHeaders({"Authorization": this.token});
  }

  public getReport(): void {
    this.http.get('https://cm0ki0o3l0.execute-api.us-east-1.amazonaws.com/Prod/stocking/orders/', 
      { headers: this.headers }
    ).subscribe(res => {
        this.orderList = (res as Order[]);
        this.orderListObs.next(this.orderList);
      },
      err => {
        console.log(err);
      });
  }

  public updateOrderStatus(order: Order, newOrderStatus: string): Observable<any> {
    let body = {
      email: order.email,
      order_ts: order.order_ts,
      orderStatus: newOrderStatus
    };

    return this.http.put('https://cm0ki0o3l0.execute-api.us-east-1.amazonaws.com/Prod/stocking/orders/update',
      body,
      { headers: this.headers }
    );
  }
}

export class Order{
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  order_ts: string;
  order_update_ts: string;
  phone: string;
  pickup: string;
  stockingCount: number;
  orderStatus: string;
}