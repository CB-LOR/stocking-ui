import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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
    console.log(this.token);
    console.log(this.headers);
    this.http.get('https://cm0ki0o3l0.execute-api.us-east-1.amazonaws.com/Prod/stocking/orders/', 
      { headers: this.headers }
    ).subscribe(res => {
        console.log(res);
        this.orderList = (res as Order[]);
        this.orderListObs.next(this.orderList);
      },
      err => {
        console.log(err);
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