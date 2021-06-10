import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User;
  constructor(private currentUserService: CurrentUserService) {
    this.user = this.currentUserService.user;
  }

  ngOnInit(): void {
  }

}
