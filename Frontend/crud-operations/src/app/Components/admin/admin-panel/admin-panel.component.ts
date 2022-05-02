import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  
  dashBoardLink(){
    console.log("dashboard");
    this.router.navigateByUrl('/admin/DashBoard');
  }

  deleteProductsLink(){
    this.router.navigateByUrl('/admin/DeleteProducts');
  }

  updateProductsLink(){
    this.router.navigateByUrl('/admin/UpdateProducts');
  }

  checkEmployees(){
    this.router.navigateByUrl('/admin/employees');
  }

  generateReports(){
    this.router.navigateByUrl('/admin/GenerateReports');
  }

  viewRequests(){
    this.router.navigateByUrl('/admin/ViewRequests');
  }

  logOut() {
    //clear login token
    sessionStorage.clear()

    this.router.navigateByUrl('');
  }
}
