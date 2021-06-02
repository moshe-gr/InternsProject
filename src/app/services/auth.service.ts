import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost:8080/auth/";

  constructor(private httpClient: HttpClient) { }
  
  login(passport:number): Observable<any>{
    return this.httpClient.get(this.baseUrl + passport);
  }

  request(phoneNumber:string): Observable<any>{
    return this.httpClient.post(this.baseUrl + 'request', { phoneNumber: phoneNumber })
  }

  check(pass:{ request_id:string, code:string }): Observable<any>{
    return this.httpClient.post(this.baseUrl + 'check', pass);
  }

  cancel(reqId: string): Observable<any>{
    return this.httpClient.post(this.baseUrl + 'cancel', { request_id: reqId })
  }
}
