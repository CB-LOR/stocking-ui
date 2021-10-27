import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockingSignupComponent } from './pages/stocking-signup/stocking-signup.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { OrderDashComponent } from './admin/order-dash/order-dash.component';

const routes: Routes = [
  { path: 'stocking-signup', component: StockingSignupComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'order-admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: StockingSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
