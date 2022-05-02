import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {
  displayOrder = true;
  displayUnlock: boolean;
  displayProfile: boolean;
  sendRequest: boolean;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  /*dashBoardLink(){
    console.log("dashboard");
    this.router.navigateByUrl('\admin\DashBoard');
  }*/

  sendRequestLink(){
    this.hideAll();
    this.sendRequest = true;
  }

  updateOrderStatusLink(){
    this.hideAll();
    this.displayOrder = true;
  }

  unlockUsersLink(){
    this.hideAll();
    this.displayUnlock = true;
  }

  editProfileLink(){
    this.hideAll();
    this.displayProfile = true;
  }

  logoutLink(){
    sessionStorage.clear();
    this.router.navigateByUrl("");
  }

  hideAll() {
    this.displayOrder = false;
    this.displayUnlock = false;
    this.displayProfile = false;
    this.sendRequest = false;
  }
}
