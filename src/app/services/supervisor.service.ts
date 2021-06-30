import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supervisor } from '../models/supervisor.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  baseUrl: string = 'http://localhost:8080/api/supervisors/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getSupervisor(_id: string, headers?): Observable<Supervisor> {
    return this.httpClient.get<Supervisor>(
      this.baseUrl + _id,
      this.authService.getOptions(headers)
    );
  }

  updateSupervisor(_id: string, updteData, headers?): Observable<Supervisor> {
    return this.httpClient.put<Supervisor>(
      this.baseUrl + _id,
      updteData,
      this.authService.getOptions(headers)
    );
  }

}
