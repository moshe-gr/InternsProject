import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/enums/role.enum';
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
  logo: string;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.user = this.currentUserService.user;
    if (this.user.role_number == 4 && this.user.more_info && this.user.more_info.professional) {
      this.logo = "../../../assets/" +     
      this.user.more_info.professional.medical_institution +
      ".png";
    }
    else if (this.user.role_number == 2 && this.user.more_info) {
      this.logo = "../../../assets/" +
        this.user.more_info.medical_institution +
      ".png";
    }
  }

  logout(): void {
    this.currentUserService.user = {
      email: '',
      first_name: '',
      last_name: '',
      passport: '',
      telephone: '',
      role_number: Role.intern
    };
  }

}
