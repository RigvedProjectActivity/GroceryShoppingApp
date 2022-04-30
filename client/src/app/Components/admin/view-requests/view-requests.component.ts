import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';


@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  requests?:any[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.viewRequests().subscribe(res => this.requests = res);
  }

}
