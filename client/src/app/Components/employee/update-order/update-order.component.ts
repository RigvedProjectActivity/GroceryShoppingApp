import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  orderMsg: string;
  orders: Array<any>;
  constructor(public empServ: EmployeeService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  editOrder(orderRef: any) {
    this.empServ.updateOrder(orderRef).subscribe((result: string) => {
      this.orderMsg = result;
    })
    this.getOrders();
    this.ngOnInit();
  }
  getOrders() {
    this.empServ.getOrders().subscribe(result => this.orders = result);
  }
}
