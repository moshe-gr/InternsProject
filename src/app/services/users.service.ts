import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: Intern[] = [];
  private users: BehaviorSubject<Intern[]> = new BehaviorSubject<Intern[]>(this._users);
  constructor() { }

  addUser(user:Intern) {
    this._users = [...this._users, user];
    this.users.next(this._users);
  }
  getUsers() {
    return this.users;
  }
  updateUser(passport: number, update: {}) {
    let user = this._users.find(intern => intern.passport == passport);
    for (let key of Object.keys(update)) {
      user[key] = update[key];
    }
    this.users.next(this._users);
  }
  getUser(passport: number) {
    let user;
    this.getUsers().subscribe(users => user = users.find(user => user.passport == passport));
    return user;
  }

}