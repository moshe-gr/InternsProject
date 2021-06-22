import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  baseUrl: string = 'http://localhost:8080/api/interns/'

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  createIntern(intern, headers?): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'create', intern, this.authService.getOptions(headers));
  }

}