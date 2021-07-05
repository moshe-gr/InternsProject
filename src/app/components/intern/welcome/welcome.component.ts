import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User;

  constructor(private currentUserService: CurrentUserService, private usersService: UsersService) {
    currentUserService.getCurrentUser().then(
      user => this.user = user);
  }

  ngOnInit(): void {
  }

}