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
    this.usersService.getUser(this.currentUserService.user._id).subscribe(
      user => {
        console.log(user);
        this.currentUserService.user = user;
        this.user = user;
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
  }

}