import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supervisor } from '../models/supervisor.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  baseUrl: string = environment.myServer + 'api/supervisors/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  createSupervisor(superVisor: Supervisor, headers?): Observable<Supervisor> {
    return this.httpClient.post<Supervisor>(
      this.baseUrl + 'createSupervisor', superVisor, this.authService.getOptions(headers)
    );
  }

}
