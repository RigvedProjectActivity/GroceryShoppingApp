import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()                   // pre-defined interface 
export class AdminAuthGuard implements CanActivate {
    constructor(public router:Router) { }
    canActivate(){      //pre-defined methods. 
      let obj = sessionStorage.getItem("token");
      if(obj!=null){
          return true;
      }else {
          console.log("Redirecting");
          this.router.navigateByUrl("\admin\SignInForm");
          return false;
      }
    }
}