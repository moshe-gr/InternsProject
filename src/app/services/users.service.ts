import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "http://localhost:8080/";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  addUser(user: User, headers?): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + 'api/users/create', user, this.authService.getOptions(headers));
  }

  getUsers(headers?): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl + 'api/users/getAll', this.authService.getOptions(headers));
  }

  updateUser(_id: string, update: {}, headers?): Observable<User>{
    return this.httpClient.put<User>(this.baseUrl + 'api/users/' + _id, update, this.authService.getOptions(headers));
  }

  getUser(_id: string, headers?): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl + 'api/users/' + _id, this.authService.getOptions(headers));
  }

}