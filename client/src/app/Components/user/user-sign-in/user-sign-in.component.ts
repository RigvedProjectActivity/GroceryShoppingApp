import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  message:String=""
  userDetails;

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  signIn(userSignInRef:any){
    // console.log(userSignInRef);
    this.userService.signIn(userSignInRef.UserID,userSignInRef.password).subscribe(data=>{
      console.log(data.token);
      if(!(data.token=="Enter Correct ID" || data.token.includes("Enter correct password") || data.token.includes("You have no valid")))
      {
        sessionStorage.setItem('token',data.token);

        this.router.navigate(["user"]);

      }else{
        this.message=data.token;
      }
      
    })

    //on signIn, store some userDetails into storage as cookies for easy fetching
    this.userService.getUserById(userSignInRef.UserID).subscribe(res => {
      this.userDetails = res;
      sessionStorage.setItem('userID', this.userDetails[0]._id);
      sessionStorage.setItem('accNum', this.userDetails[0].accNumber);
      sessionStorage.setItem('funds', this.userDetails[0].funds);      
    })
  }

}
