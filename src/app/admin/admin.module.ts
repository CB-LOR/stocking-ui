import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDashComponent } from './order-dash/order-dash.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [OrderDashComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
