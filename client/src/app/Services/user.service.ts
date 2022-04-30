import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funds } from '../funds.model';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ipAddress:string="http://localhost:9090"
  constructor(public http: HttpClient) { }
  signIn(UserId:string,Password:string){
    console.log(UserId+Password);
    return this.http.post<{token:string}>(this.ipAddress+ "/user/userSignIn",{UserId,Password});
  };

  signUp(profileRef: any): any {
    return this.http.post(this.ipAddress + "/user/userSignUp", profileRef, {responseType: 'text'})
    .subscribe((result) => alert(result),
        (error) => console.log(error))
  }
  
  // Service function to get order status from backend
  retrieveOrder(id: any): Observable<Order[]> {
    return this.http.get<Order[]>(this.ipAddress + "/user/retrieveOrder/" + id);
  }

  editProfile(profileRef: any): any {
    return this.http.put(this.ipAddress + "/user/editProfile/", profileRef, {responseType: 'text'})
  }

  retrieveFunds(id: any): Observable<any> {
    return this.http.get<any>(this.ipAddress + "/user/retrieveFunds/" + id);
  }

  changeFunds(fundsRef: any): any {
    return this.http.put(this.ipAddress + "/user/changeFunds/", fundsRef, {responseType: 'text'})
  }
  
  addNewOrder(Order: any):any {
    this.http.post(this.ipAddress + "/user/newOrders/", Order, {responseType: 'text'}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  getUserById(id:any):Observable<any> {
    return this.http.get<any>(this.ipAddress + "/user/getUser/" + id);
  }

  subtractProductQuant(id:any) {
    this.http.put(this.ipAddress + "/user/subtractProductQuantity", id, {responseType: 'text'}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}
