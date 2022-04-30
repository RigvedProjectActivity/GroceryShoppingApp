import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {
  userMsg: string;
  tickets: Array<any>;
  constructor(public empServ: EmployeeService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  unlockUser(userRef: any) {
    this.empServ.unlockUser(userRef).subscribe((result: string) => {
      this.userMsg = result;
    })
    this.getTickets();
    this.ngOnInit();
  }
  getTickets() {
    this.empServ.getTickets().subscribe(result => this.tickets = result);
  }
}
