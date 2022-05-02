import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/model.product';
import { AdminService } from '../../../Services/admin.service';
import { EmployeeService } from '../../../Services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-send-request',
  templateUrl: './employee-send-request.component.html',
  styleUrls: ['./employee-send-request.component.css']
})
export class EmployeeSendRequestComponent implements OnInit {

  message:String="";
  products?:Array<Product>;
  constructor(public adminService:AdminService,public empService:EmployeeService,public router:Router) { }

  ngOnInit(): void {
    this.adminService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }

  changeProductReq(changeProductRequestRef:any){
    console.log(changeProductRequestRef);
    this.empService.changeProductRequest(changeProductRequestRef).subscribe(result=>this.message=result);
  }
}
