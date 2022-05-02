import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../Model/employee.model';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {
  
  employees?:Employee[];

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployeeDetails().subscribe(res => this.employees = res);
  }
}
