import { Injectable } from '@angular/core';
import { InternInfo } from '../models/intern-info';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: User = { id: 0, first_name: '', last_name: '', passport: 0, telephone: '', rolNumber: 2 };

  constructor(private usersService: UsersService) { }
  registerUser() {
    this.usersService.addUser(Object.assign({}, this.user)).subscribe(user => this.user = user);
    console.log(this.user);
    
  }
}