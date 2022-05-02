import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  updateMsg: string;
  constructor(public empServ: EmployeeService) { }

  ngOnInit(): void {
  }

  editProfile(profileRef: any) {
    console.log(profileRef);
    this.empServ.editProfile(profileRef).subscribe((result: string) => {
      this.updateMsg = result;
    })
  }
}
