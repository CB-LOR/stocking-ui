import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockingSignupComponent } from './pages/stocking-signup/stocking-signup.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

const routes: Routes = [
  { path: 'stocking-signup', component: StockingSignupComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'order-admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '/stocking-signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
