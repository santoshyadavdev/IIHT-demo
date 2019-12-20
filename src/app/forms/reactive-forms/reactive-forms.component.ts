import { Component, OnInit } from '@angular/core';

import {
  FormControl, FormGroup,
  FormBuilder, FormArray, Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  searchText: FormControl;
  orderForm: FormGroup;

  get productArray() {
    return this.orderForm.get('products') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchText = new FormControl('google');

    this.orderForm = this.fb.group({
      name: new FormControl({ value:'Test', disabled: true }, [Validators.required, Validators.minLength(10) , Validators.maxLength(15)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      mobile: new FormControl('', Validators.required),
      address: this.fb.group({
        addrLine1: new FormControl('', Validators.required),
        addrLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      products: this.fb.array([
        this.buildForm()
      ])
    })

    this.bindFormData();
  }

  bindFormData() {
    // this.orderForm.setValue({
    //   name: 'Test2',
    //   email: 'abc@gmail.com',
    //   mobile: 'dsfdsfsdf'
    // })

    this.orderForm.patchValue({
      name: 'Test2',
      email: 'abc@gmail.com',
      mobile: 'dsfdsfsdf'
    })
  }

  private buildForm(): any {
    return this.fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl(''),
      qty: new FormControl('')
    });
  }

  addProductControl() {
    this.productArray.push(
     this.buildForm()
    );
  }

  removeProductControl(i: number) {
    this.productArray.removeAt(i);
  }

  removeAll() {
    this.productArray.clear();
  }

  placeOrder() {
    console.log(this.orderForm.getRawValue());
  }

}
