import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(public currentUserService: CurrentUserService, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.usersService.createIntern( 
      {
        user: this.currentUserService.user._id,
        personal: this.currentUserService.user.more_info.personal,
        professional: this.currentUserService.user.more_info.professional
      }
    ).subscribe();
  }
}
