import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-page-sign-in-form',
  templateUrl: './admin-page-sign-in-form.component.html',
  styleUrls: ['./admin-page-sign-in-form.component.css']
})
export class AdminPageSignInFormComponent implements OnInit {

  constructor(public adminService:AdminService,public router:Router) { }
   message:String=""
  ngOnInit(): void {
  }
  signIn(adminSignInRef:any){
    console.log(adminSignInRef.adminId);
    this.adminService.signIn(adminSignInRef.adminId,adminSignInRef.password).subscribe(data=>{
      console.log(data.token);
      if(!(data.token=="Enter Correct Credentials"))
      {
        sessionStorage.setItem('token',data.token);

        this.router.navigateByUrl('admin/DashBoard');

      }else{
        this.message=data.token;
      }
      
    },
    )
  }

  onSubmit(){}
}
