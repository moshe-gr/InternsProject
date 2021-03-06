import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.myServer + "auth/";
  token: string;

  constructor(private httpClient: HttpClient) { }
  
  login(passport: string): Observable<any>{
    return this.httpClient.get(
      this.baseUrl + passport
    );
  }

  request(phoneNumber:string): Observable<any>{
    return this.httpClient.post(
      this.baseUrl + 'request',
      { phoneNumber: phoneNumber }
    );
  }

  check(pass:{ request_id:string, code:string, role_number?: number }): Observable<any>{
    return this.httpClient.post(
      this.baseUrl + 'check',
      pass
    );
  }

  cancel(reqId: string): Observable<any>{
    return this.httpClient.post(
      this.baseUrl + 'cancel',
      { request_id: reqId }
    );
  }

  faceDetect(pic): Observable<any>{
    return this.httpClient.post(
      environment.myServer + 'api/faceDetect',
      { pic: pic.imageAsBase64 },
      this.getOptions()
    );
  }

  getOptions(headers?) {   
    headers = headers ? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token || 'No token!';
    return { headers: new HttpHeaders(headers) };
  }
  
}
