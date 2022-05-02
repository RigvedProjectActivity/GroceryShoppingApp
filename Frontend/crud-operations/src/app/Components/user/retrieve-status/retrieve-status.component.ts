import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-retrieve-status',
  templateUrl: './retrieve-status.component.html',
  styleUrls: ['./retrieve-status.component.css']
})
export class RetrieveStatusComponent implements OnInit {
  resultMsg?: string;
  constructor(public userServ: UserService) { }

  ngOnInit(): void {
  }

  // Search for order status based on user inputted ID
  searchDetails(id: any) {
    this.userServ.retrieveOrder(id).subscribe(result => {
      if(result?.length > 0) {
        this.resultMsg = "ID is " + result[0]._id + ". Order status is " + result[0].status + ".";
      } else {
        this.resultMsg = "Order not found."
      }
    })
  }
}
