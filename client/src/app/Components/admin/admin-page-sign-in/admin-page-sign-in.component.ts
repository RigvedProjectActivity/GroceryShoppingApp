import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-page-sign-in',
  templateUrl: './admin-page-sign-in.component.html',
  styleUrls: ['./admin-page-sign-in.component.css']
})
export class AdminPageSignInComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  adminSigin(){
    this.router.navigate(["admin/SignInForm"]);
  }
}
