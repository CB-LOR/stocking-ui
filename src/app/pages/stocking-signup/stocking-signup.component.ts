import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StockingSignupSubmitService } from 'src/app/service/stocking-signup-submit.service';

@Component({
  selector: 'stocking-signup',
  templateUrl: './stocking-signup.component.html',
  styleUrls: ['./stocking-signup.component.scss']
})
export class StockingSignupComponent {

  constructor(
    private fb: FormBuilder,
    private sss: StockingSignupSubmitService
  ) { }

  stockingOrderForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', Validators.email],
    phone: ['', Validators.pattern(/\(\d{3}\) \d{3}-\d{4}/)],
    stockingCount: [''],
    pickup: [''],
    message: ['']
  });

  stockingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  receiptOptions = [{label: 'Pickup from Meeks residence', val: 'home'}, {label: 'Send via email', val: 'email'}];

  formatPhone(event){
    let phone = event.target.value;
		phone = phone.replace(/\D/g, '');

		if(phone.length > 3 && phone.length <= 6){
			phone = phone.replace(/(\d{1,3})(\d{1,3})/, "($1) $2");
		} else if(phone.length > 6){
			phone = phone.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, "($1) $2-$3");
		}

    this.stockingOrderForm.get('phone').setValue(phone);
	}

  getErrorMessage() {
      return 'You must enter a valid value';
  }

  onSubmit() {
    console.log(this.stockingOrderForm.value);
    this.sss.submitStockingOrder(this.stockingOrderForm.value).subscribe(resp => {
      console.log(resp);
    });
  }

}
