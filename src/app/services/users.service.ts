import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InternInfo } from '../models/intern-info.model';
import { Supervisor } from '../models/supervisor.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = environment.myServer + 'api/users/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  addUser(user: User, headers?): Observable<User> {
    return this.httpClient.post<User>(
      this.baseUrl + 'create', user, this.authService.getOptions(headers)
    );
  }

  getUsers(headers?): Observable<User[]> {
    return this.httpClient.get<User[]>(
      this.baseUrl + 'getAll', this.authService.getOptions(headers)
    );
  }

  updateUser(_id: string, update: {}, headers?): Observable<User> {
    return this.httpClient.put<User>(
      this.baseUrl + _id, update, this.authService.getOptions(headers)
    );
  }

  getUser(_id: string, headers?): Observable<User> {
    return this.httpClient.get<User>(
      this.baseUrl + _id, this.authService.getOptions(headers)
    );
  }

  createSupervisor(superVisor: Supervisor, headers?): Observable<Supervisor> {
    return this.httpClient.post<Supervisor>(
      this.baseUrl + 'createSupervisor', superVisor, this.authService.getOptions(headers)
    );
  }

  createIntern(intern: InternInfo, headers?): Observable<InternInfo> {
    return this.httpClient.post<InternInfo>(
      this.baseUrl + 'createIntern', intern, this.authService.getOptions(headers)
    );
  }

}