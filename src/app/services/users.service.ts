import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "http://localhost:8080/";
  token: string;

  constructor(private httpClient: HttpClient) { }

  addUser(user:Intern, headers?): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/users/create', user, this.getOptions(headers));
  }

  getUsers(headers?): Observable<any>{
    return this.httpClient.get(this.baseUrl + 'api/users/getAll', this.getOptions(headers));
  }

  updateUser(_id: string, update: {}, headers?): Observable<any>{
    return this.httpClient.put(this.baseUrl + 'api/users/' + _id, update, this.getOptions(headers));
  }

  getUser(_id: string, headers?): Observable<any>{
    return this.httpClient.get(this.baseUrl + 'api/users/' + _id, this.getOptions(headers));
  }

  getOptions(headers?) {
    headers = headers ? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token;
    return { headers: new HttpHeaders(headers) };
  }

}