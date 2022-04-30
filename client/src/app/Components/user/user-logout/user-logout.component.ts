import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    this.router.navigateByUrl("");
    alert("You have been successfully logged out.");
  }
}
