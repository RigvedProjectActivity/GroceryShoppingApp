import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/model.product';
import { AdminService } from '../../../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin-delete-products',
  templateUrl: './admin-delete-products.component.html',
  styleUrls: ['./admin-delete-products.component.css']
})
export class AdminDeleteProductsComponent implements OnInit {

  message:String="";
  products?:Array<Product>;
  constructor(public adminService:AdminService,public router:Router) { }

  ngOnInit(): void {
    this.adminService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }

  deleteProduct(adminDeleteProductsRef:any){
    console.log("id is "+adminDeleteProductsRef.ProductID);
    this.adminService.deleteProductById(adminDeleteProductsRef.ProductID).subscribe((result:string)=> {
        this.message=result;
        location.reload();
        alert('Product deleted Successfully')
  })
  }

}
