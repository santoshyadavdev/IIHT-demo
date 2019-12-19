import { Component, OnInit, ContentChild } from '@angular/core';

import { EmployeeComponent } from '../employee/employee.component';
@Component({
  selector: 'app-content-project-demo',
  templateUrl: './content-project-demo.component.html',
  styleUrls: ['./content-project-demo.component.css']
})
export class ContentProjectDemoComponent implements OnInit {

  @ContentChild(EmployeeComponent, { static: true }) employeeComponent: EmployeeComponent;
  constructor() { }

  ngOnInit() {
    console.log(this.employeeComponent);
  }

}
