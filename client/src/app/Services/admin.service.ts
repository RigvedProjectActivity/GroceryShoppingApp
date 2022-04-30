import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Model/model.product';
import { Observable } from 'rxjs';
import { Order } from '../Model/order.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  ipAddress:string="http://localhost:9090";

  constructor(public http:HttpClient) { }

  signIn(AdminId:string,Password:string){
    console.log(AdminId+Password);
    return this.http.post<{token:string}>(this.ipAddress + '/admin/adminSignIn',{AdminId,Password});
  };
  
  storeProductDetailsInfo(productRef:any){
    this.http.post(this.ipAddress + '/admin/product/addProductDetails',productRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  
  retrieveAllProductDetails():Observable<Product[]>{
    return this.http.get<Product[]>(this.ipAddress + '/admin/product/allProductDetails');
 }
  
 updateProductDetails(productRef:any):any{
  return this.http.put(this.ipAddress + '/admin/product/updateProductDetails',productRef,{responseType:'text'})
}

deleteProductById(id:any):any{
  return this.http.delete(this.ipAddress + '/admin/product/deleteProductDetailsById/'+id,{responseType:'text'});
}

generateDailyReport(date:any):Observable<Order[]>{
  return this.http.get<Order[]>(this.ipAddress+"/admin/reports/getDailyReport/"+date);
}

generateWeeklyReport(startDate:any, endDate:any):Observable<Order[]>{
  return this.http.get<Order[]>(this.ipAddress+`/admin/reports/getWeeklyReport/${startDate}/${endDate}`);
}

generateMonthlyReport(yearMonthString:any):Observable<Order[]>{
  const tmp = yearMonthString.split(/\s*\-\s*/g);

  //split query param by hyphen delimiter 
  const year = tmp[1];
  const month = tmp[0];

  //api takes in number of month
  const monthNum = new Date(month+'1, 2021').getMonth()+1;
  
  return this.http.get<Order[]>(this.ipAddress+`/admin/reports/getMonthlyReport/${year}/${monthNum}`);
}

generateUserReport(id:any):Observable<Order[]>{
  return this.http.get<Order[]>(this.ipAddress+"/admin/reports/getUserReport/"+id);
}

viewRequests():Observable<any[]>{
  return this.http.get<any[]>(this.ipAddress+"/admin/getProdRequests");

}

}
