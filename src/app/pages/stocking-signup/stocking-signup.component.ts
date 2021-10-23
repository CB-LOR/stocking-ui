import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'stocking-signup',
  templateUrl: './stocking-signup.component.html',
  styleUrls: ['./stocking-signup.component.scss']
})
export class StockingSignupComponent {

  stockingOrderForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', Validators.email],
    phone: ['', Validators.pattern('[- +()0-9]+')],
    stockingCount: [''],
    pickup: [''],
    message: ['']
  });

  getErrorMessage() {
    if (this.stockingOrderForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.stockingOrderForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    console.log(this.stockingOrderForm.value);
  }

  constructor(private fb: FormBuilder) { }

}
