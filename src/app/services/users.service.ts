import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: Intern[] = [];
  users: BehaviorSubject<Intern[]> = new BehaviorSubject<Intern[]>(this._users);
  constructor() { }

  addUser(user:Intern) {
    this._users = [...this._users, user];
    this.users.next(this._users);
  }
  getUser(passport: number) {
    return this._users.find(intern => intern.passport == passport);
  }
  updateUser(passport: number, update: Intern) {
    this.users.subscribe(interns => interns.splice(interns.findIndex(() => interns.find(intern => intern.passport == passport)), 1, update));
  }

}