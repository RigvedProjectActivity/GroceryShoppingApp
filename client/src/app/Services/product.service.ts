import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from '../Model/model.productmodel';
import { FundsDetails } from '../Model/funds.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ipAddress:string="http://localhost:9090"
  constructor(public http:HttpClient) { }
 
  retrieveAllProductDetails():Observable<ProductDetails[]>{
    return this.http.get<ProductDetails[]>(this.ipAddress+ "/admin/product/allProductDetails")
  }
  retrieveFunds():Observable<FundsDetails>{
    return this.http.get<FundsDetails>(this.ipAddress+ "/user/addFunds/")
  }
  user_cart(ProductDetails:any):any{
  return this.http.post(this.ipAddress+ "/user/selectedOrders/", ProductDetails, {responseType: 'text'})
 }
  addTicket(ticketRef: any): any {
  return this.http.post(this.ipAddress+ "/user/addTicket/", ticketRef, {responseType: 'text'} )
}

}
