import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/model.product';
import { AdminService } from '../../../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent implements OnInit {
  message:String="";
  products?:Array<Product>;
  constructor(public adminService:AdminService,public router:Router) { }

  ngOnInit(): void {
    this.adminService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }

  addProduct(adminAddProductsRef:any){
    console.log(adminAddProductsRef);
    this.adminService.storeProductDetailsInfo(adminAddProductsRef);
    location.reload();
    alert('Product added Successfully')
  }

}
