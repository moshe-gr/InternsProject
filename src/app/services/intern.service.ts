import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InternInfo } from '../models/intern-info.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  baseUrl: string = environment.myServer + 'api/interns/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getIntern(_id: string, headers?): Observable<InternInfo> {
    return this.httpClient.get<InternInfo>(
      this.baseUrl + _id,
      this.authService.getOptions(headers)
    );
  }

  updateIntern(_id: string, updteData, headers?): Observable<InternInfo> {
    return this.httpClient.put<InternInfo>(
      this.baseUrl + _id,
      updteData,
      this.authService.getOptions(headers)
    );
  }
  
}
