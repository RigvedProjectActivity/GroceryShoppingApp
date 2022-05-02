import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../../Model/model.productmodel';
import { UserService } from '../../../Services/user.service';
import { AdminService } from '../../../Services/admin.service';
import { Order } from '../../../Model/order.model';
import { Router } from '@angular/router';
import { ProductService } from '../../../Services/product.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  user_cart?: Array<ProductDetails>;
  user_total_price?: Array<number> = [];
  check_fund_total?: number = 0;
  //funds?:FundsDetails;
  funds?: number;

  constructor(
    private userService: UserService,
    private adminService: AdminService,
    public productSer:ProductService
  ) {}

  ngOnInit(): void {
    this.load_user_cart()
    this.create_table();
  }
  create_table(){
    // Insert  empty rows for all items 
    var table = document.getElementById("AddedItems");
    var body = table.getElementsByTagName("tbody")[0];
    // iterate over each item and add it to a row
    var index = 0;
    console.log("Printing the product array")
    console.log(this.user_cart)
    for (var item of this.user_cart){
        var rows = body.insertRow(index++);
        var newCol1 = rows.insertCell(0);
        newCol1.innerHTML = item._id.toString();
        var newCol2 = rows.insertCell(1);
        newCol2.innerHTML = item.ProductName;
        var newCol3 = rows.insertCell(2);
        newCol3.innerHTML = item.ProductPrice.toString();
        var newCol4 = rows.insertCell(3);
        newCol4.innerHTML = "<div contenteditable='false'>1</div>";
        var newCol5 = rows.insertCell(4);
        newCol5.innerHTML = item.Discount.toString();
        var newCol6 = rows.insertCell(5);
        newCol6.innerHTML = String(item.ProductPrice - (item.ProductPrice * (item.Discount / 100)));
      }
    }
  load_user_cart(){
    var user_data = sessionStorage.getItem("user_cart");
    this.user_cart = JSON.parse(user_data);
  }
  delete_onClick(){
    var chosen_index = <HTMLInputElement>document.getElementById("deleter")
    var index = parseInt(chosen_index.value)
    if ((index) > this.user_cart.length){
      console.log("im here index less than cart")
      alert("Specified index out of range")
    }
    else if(index <= 0){
      alert("Index number cannot be less than 0")
    }
    else{
      this.user_cart.splice(parseInt(chosen_index.innerHTML)-1, 1);
      sessionStorage.setItem('user_cart', JSON.stringify(this.user_cart));
      chosen_index.innerHTML = "";
      var table = document.getElementById("AddedItems");
      var body = table.getElementsByTagName("tbody")[0];
      body.deleteRow((index-1))
    }
  }
  calculate_total_price(){
    let total_price:number = 0;
    for(var index = 0; index < this.user_cart.length; index++){
      total_price = total_price + this.user_cart[index]["ProductPrice"] - (this.user_cart[index]["ProductPrice"] * (this.user_cart[index]["Discount"] / 100))
    }
    this.check_fund_total = total_price;
    return total_price;
  }
  check_funds() {
    var user_data = sessionStorage.getItem('user_cart');
    const accNum = sessionStorage.getItem('accNum');
    var user_cart_items = JSON.parse(user_data);

    console.log(user_cart_items);

    this.userService.retrieveFunds(accNum).subscribe((result) => {
      this.funds = result[0].funds;

      const fundsLeftOver = this.funds - this.check_fund_total;

      if (fundsLeftOver > 0) {
        
        //decrease Product Quantity of purchased products
        user_cart_items.forEach((item) => {
          const { _id } = item;
      
          //should
          this.userService.subtractProductQuant({ id: _id });

        });

        //subtract funds from user funds
        this.userService.changeFunds({"accNum": accNum, "funds":this.check_fund_total*-1}).subscribe();

        const orderId = Date.now()
        //add to Orders table
        const newOrder:Order = {
          id: orderId, //cheap way to add unique id
          userId: sessionStorage.getItem('userID'),
          status: "Ordered",
          amount: this.check_fund_total,
          timestamp: Date()
        }

        // console.log(newOrder)
        this.userService.addNewOrder(newOrder);

        //success alert
        alert(`Thank you! Order got placed. Your Order Id is ${orderId}`);

        //clear cart in storage
        sessionStorage.setItem('user_cart', JSON.stringify([]));
      } else {
        alert('Error: Not enough funds to purchase items.');
      }
    });

    //update funds for acc
  }
}
