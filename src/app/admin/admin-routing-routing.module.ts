import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDashComponent } from './order-dash/order-dash.component';

const routes: Routes = [
  {path: '', component: OrderDashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingRoutingModule { }
