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
  updateUser(passport: number, update: Intern) {
    this._users.splice(this._users.findIndex(
      () => this._users.find(
        intern => intern.passport == passport
      )), 1, update);
    this.users.next(this._users);
  }

}