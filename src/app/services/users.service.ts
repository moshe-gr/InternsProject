import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternInfo } from '../models/intern-info';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "http://localhost:8080/";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  addUser(user:InternInfo, headers?): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/users/create', user, this.authService.getOptions(headers));
  }

  getUsers(headers?): Observable<any>{
    return this.httpClient.get(this.baseUrl + 'api/users/getAll', this.authService.getOptions(headers));
  }

  updateUser(_id: string, update: {}, headers?): Observable<any>{
    return this.httpClient.put(this.baseUrl + 'api/users/' + _id, update, this.authService.getOptions(headers));
  }

  getUser(_id: string, headers?): Observable<any>{
    return this.httpClient.get(this.baseUrl + 'api/users/' + _id, this.authService.getOptions(headers));
  }

}