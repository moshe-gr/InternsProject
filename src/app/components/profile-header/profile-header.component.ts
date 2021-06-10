import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  collapsed = false;
  user: User;
  constructor(currentUserService: CurrentUserService) {
    this.user = currentUserService.user;
   }

  ngOnInit(): void {
  }

}
