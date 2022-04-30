import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from '../../../Model/employee.model';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  addEmployeeForm:FormGroup;
  submitted = false;
  
  constructor(private fb:FormBuilder, private empService:EmployeeService) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      id: ['', Validators.required],
      emailID:['', [Validators.required, Validators.email]],
      pwd: 'welcome123'
    });

  }

  addEmployee() {
    const empDetails:Employee = this.addEmployeeForm.value;
    this.submitted = true;

    if(this.addEmployeeForm.valid) {
      this.empService.addEmployee(empDetails);
      location.reload();
      alert('Success: Employee added. DEFAULT PASSWORD: welcome123');
    }
   
  }

}
