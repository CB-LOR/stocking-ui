import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AdminService {

  private orderList: Order[];
  public orderListObs: BehaviorSubject<Order[]>;

  constructor(private http: HttpClient) {
    this.orderList = new Array<Order>();
    this.orderListObs = new BehaviorSubject<Order[]>(this.orderList);
  }

  getReport(): void {
    this.http.get('https://cm0ki0o3l0.execute-api.us-east-1.amazonaws.com/Prod/stocking/orders/')
      .subscribe(res => {
        console.log(res);
        this.orderList = (res as Order[]);
        this.orderListObs.next(this.orderList);
      });
  }
}


export class Order{
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  order_ts: string;
  phone: string;
  pickup: string;
  stockingCount: number;
}