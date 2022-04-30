import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/model.product';
import { AdminService } from '../../../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-products',
  templateUrl: './admin-update-products.component.html',
  styleUrls: ['./admin-update-products.component.css']
})
export class AdminUpdateProductsComponent implements OnInit {

  message:String="";
  products?:Array<Product>;
  constructor(public adminService:AdminService,public router:Router) { }

  ngOnInit(): void {
    this.adminService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }
  updateProduct(adminUpdateProductsRef:any){
    console.log(adminUpdateProductsRef);
    this.adminService.updateProductDetails(adminUpdateProductsRef).subscribe((result:string)=> {
      this.message=result;
    });
}

}
