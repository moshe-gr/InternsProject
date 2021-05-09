import { Injectable } from '@angular/core';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private static users: Intern[] = [];
  constructor() { }
  addUser(user: Intern) {
    RegisterService.users.push(user);
  }
}
