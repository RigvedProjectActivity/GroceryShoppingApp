import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../Services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.css']
})
export class EmployeeSigninComponent implements OnInit {

  message:String=""
  constructor(public empService:EmployeeService,public router:Router) { }

  ngOnInit(): void {
  }

  signIn(empSignInRef:any){
    console.log(empSignInRef.EmployeeID);
    this.empService.signIn(empSignInRef.EmployeeID,empSignInRef.password).subscribe(data=>{
      console.log(data.token);
      if(!(data.token=="Enter Correct ID" || data.token=="Enter Correct password"))
      {
        sessionStorage.setItem('token',data.token);

        this.router.navigateByUrl('employee/DashBoard');
        alert('Welcome to Employee Dashboard.!! If you Loged in 1st time then go in edit profile and update Your Password.')

      }else{
        this.message=data.token;
      }
      
    },
    )
  }

}
