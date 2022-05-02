import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
Ticket?: String;
  constructor(public productServ:ProductService, public router: Router) { }

  ngOnInit(): void {
  }
  
  addTicket(TicketRef: any) {
    this.productServ.addTicket(TicketRef).subscribe((result: string)=>{
      this.Ticket = result;
    })
    alert("Ticket Submitted Successfully! Thank you..")
    this.router.navigateByUrl("");
    }
}
