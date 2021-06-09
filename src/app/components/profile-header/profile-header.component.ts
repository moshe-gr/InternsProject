import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  collapsed = false;
  user: User;
  constructor(registerService: RegisterService) {
    this.user = registerService.user;
   }

  ngOnInit(): void {
  }

}
