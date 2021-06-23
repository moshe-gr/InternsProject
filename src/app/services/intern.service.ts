import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternInfo } from '../models/intern-info.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  baseUrl: string = 'http://localhost:8080/api/interns/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getIntern(_id: string, headers?): Observable<InternInfo> {
    return this.httpClient.get<InternInfo>(
      this.baseUrl + _id,
      this.authService.getOptions(headers)
    );
  }
}
