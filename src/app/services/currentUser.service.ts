import { Injectable } from '@angular/core';
import { Role } from '../enums/role.enum';
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

  constructor(private usersService: UsersService) { }

  async getCurrentUser(): Promise<User> {
    if (this.user._id) {
      await this.usersService.getUser(this.user._id).toPromise().then(
        user => this.user = user,
        err => console.error(err)
      );
    }
    return this.user;
  }

}