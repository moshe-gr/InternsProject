import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/models/intern';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  user?: Intern;
  constructor(private registerService: RegisterService, private usersService: UsersService) {
    this.user = usersService.getUser(registerService.user.passport);
   }

  ngOnInit(): void {
  }

}
