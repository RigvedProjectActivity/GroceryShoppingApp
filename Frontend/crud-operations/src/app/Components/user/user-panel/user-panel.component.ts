import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  displayItems: Boolean;
  displayDelete: Boolean;
  displayView: Boolean;
  displayCheckout: Boolean;
  displayOrder: Boolean;
  displayEdit: Boolean;
  displayFunds: Boolean;
  displayLogout: Boolean;
  accNum?:String;
  userID?:String;

  constructor(public router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userID")) {
      this.userID = sessionStorage.getItem("userID");
      
    }

    if(sessionStorage.getItem("accNum")) {
      this.accNum = sessionStorage.getItem("accNum");
    }

    this.displayItems = true;
  }
  
  selectItemsLink(){
    // this.router.navigateByUrl('user/product-list');
    this.hideAll();
    this.displayItems = true;
  }

  deleteItemsLink(){
    // this.router.navigateByUrl('user/cart');
    this.hideAll();
    this.displayDelete = true;
  }

  viewItemsLink(){
    // this.router.navigateByUrl('user/cart');
    this.hideAll();
    this.displayView = true;
  }

  checkOutLink(){
    // this.router.navigateByUrl('user/cart');
    this.hideAll();
    this.displayCheckout = true;
  }

  orderStatusLink(){
    this.hideAll();
    this.displayOrder = true;
  }

  editProfileLink(){
    this.hideAll();
    this.displayEdit = true;
  }

  fundsLink(){
    this.hideAll();
    this.displayFunds = true;
  }

  logoutLink(){
    this.hideAll();
    this.displayLogout = true;
  }

  hideAll() {
    this.displayItems = false;
    this.displayDelete = false;
    this.displayView = false;
    this.displayCheckout = false;
    this.displayOrder = false;
    this.displayEdit = false;
    this.displayFunds = false;
    this.displayLogout = false;
  }
}
