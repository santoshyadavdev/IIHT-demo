import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

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
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      address: this.fb.group({
        addrLine1: new FormControl(''),
        addrLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      products: this.fb.array([
        this.fb.group({
          name: new FormControl(''),
          price: new FormControl(''),
          qty: new FormControl('')
        })
      ])
    })
  }

  addProductControl() {
    this.productArray.push(
      this.fb.group({
        name: new FormControl(''),
        price: new FormControl(''),
        qty: new FormControl('')
      })
    );
  }

  removeProductControl(i: number) {
    this.productArray.removeAt(i);
  }

  removeAll() {
    this.productArray.clear();
  }

}
