import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  deleteEmployeeForm:FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder, private empService:EmployeeService) { }

  ngOnInit(): void {
    this.deleteEmployeeForm = this.fb.group({
      id: ['', Validators.required] 
    });

  }

  deleteEmployee() {
    const { id } = this.deleteEmployeeForm.value; //int parsing handled server-side  
    this.submitted = true;

    if(this.deleteEmployeeForm.valid) {
      this.empService.deleteEmployee(id);
      location.reload();
      alert('Success: Employee deleted');
    }

    //send alert employee added
    //refresh page
    
    //location.reload();
  }

}
