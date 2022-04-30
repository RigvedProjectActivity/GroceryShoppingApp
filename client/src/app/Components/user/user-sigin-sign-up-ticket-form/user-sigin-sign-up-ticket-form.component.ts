import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-sigin-sign-up-ticket-form',
  templateUrl: './user-sigin-sign-up-ticket-form.component.html',
  styleUrls: ['./user-sigin-sign-up-ticket-form.component.css']
})
export class UserSiginSignUpTicketFormComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  userSigin(){
    this.router.navigate(["user/SignIn"]);
  }

  userSigUp(){
    this.router.navigate(["user/SignUp"]);
  }

  userRaiseTicket(){
    this.router.navigate(["user/RaiseTicket"]);
  }
}
