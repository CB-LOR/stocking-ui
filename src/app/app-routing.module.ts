import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockingSignupComponent } from './pages/stocking-signup/stocking-signup.component';

const routes: Routes = [
  { path: 'stocking-signup', component: StockingSignupComponent },
  { path: '**', component: StockingSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
