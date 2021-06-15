import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { User } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  collapsed = false;
  user: User;

  constructor(private currentUserService: CurrentUserService) {
    this.user = this.currentUserService.user;
   }

  ngOnInit(): void {
  }

}
