import {
  Component, OnInit, ViewChild,
  AfterViewInit, ElementRef, ViewChildren, QueryList,
  AfterViewChecked
} from '@angular/core';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(HeaderComponent, { static: false }) headerComponent: HeaderComponent;
  @ViewChild('empname', { static: true }) empNameDiv: ElementRef;
  @ViewChildren(HeaderComponent) headerChildrenComponent: QueryList<HeaderComponent>;

  previousTitle: string;
  constructor() { }

  ngOnInit() {
    // this.headerComponent.title = 'Employee Component';
    this.empNameDiv.nativeElement.innerText = 'John';
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'Employee Component';
    console.log(this.headerChildrenComponent);
    // this.headerChildrenComponent.first.title
    this.headerChildrenComponent.forEach((header) => {
      header.title = 'New Component'
    })

  }

  ngAfterViewChecked() {
    if (this.previousTitle === this.headerComponent.title) {
      return;
    }
    else {
      console.log('else is called');
      this.previousTitle = this.headerComponent.title;
      // make some api call
    }
  }
}