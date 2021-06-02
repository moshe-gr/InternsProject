import { Injectable } from '@angular/core';
import { Intern } from '../models/intern';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: Intern = { id: 0, first_name: '', last_name: '', passport: 0, telephone: '' };

  constructor(private usersService: UsersService) { }
  registerUser() {
    this.usersService.addUser(Object.assign({}, this.user)).subscribe(user => this.user = user);
    console.log(this.user);
    
  }
}