import { Injectable } from '@angular/core';
import { Role } from '../enums/role.enum';
import { InternInfo } from '../models/intern-info.model';
import { User } from '../models/user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user: User = {
    email: '',
    first_name: '',
    last_name: '',
    passport: '',
    telephone: '',
    role_number: Role.intern
  };

  internInfo: InternInfo;

  constructor(private usersService: UsersService) { }

  async getCurrentUser(): Promise<void> {
    if (this.user._id) {
      await this.usersService.getUser(this.user._id).toPromise().then(
        user => {
          this.user = user;
          this.internInfo ?
            this.internInfo.user = user._id : this.internInfo = { user: user._id };
        },
        err => console.error(err)
      );
    }
  }

}