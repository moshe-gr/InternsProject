import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: Intern[] = [];
  users: BehaviorSubject<Intern[]> = new BehaviorSubject<Intern[]>([]);
  constructor() { }

  addUser(user:Intern) {
    this._users = [...this._users, user];
    this.users.next(this._users);
  }

}