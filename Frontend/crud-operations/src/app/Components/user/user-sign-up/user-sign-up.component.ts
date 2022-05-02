import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  updateMsg?: string;
  constructor(public userServ: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  editProfile(profileRef: any) {
    console.log(profileRef);
    this.userServ.signUp(profileRef).subscribe((result: string) => {
      this.updateMsg = result;
    })

    this.router.navigateByUrl("");
  }

}
