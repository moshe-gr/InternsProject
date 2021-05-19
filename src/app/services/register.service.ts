import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Intern } from '../models/intern';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: Intern = { id: 0, firstName: '', surName: '', passport: 0, telephone: '' }
  constructor(private usersService: UsersService) { }
  registerUser() {
    this.usersService.addUser(this.user);
  }
}
