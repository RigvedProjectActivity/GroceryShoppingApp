import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  updateMsg?: string;
  constructor(public userServ: UserService) { }

  ngOnInit(): void {
  }

  editProfile(profileRef: any) {
    console.log(profileRef);
    this.userServ.editProfile(profileRef).subscribe((result: string) => {
      this.updateMsg = result;
    })
  }
}
