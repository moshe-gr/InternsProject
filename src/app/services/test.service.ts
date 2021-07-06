import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModel } from '../models/test.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl: string = 'http://localhost:8080/api/tests/';

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  getTests(id: string): Observable<TestModel[]> {
    return this.httpClient.get<TestModel[]>(
      this.baseUrl + 'getAllTests/' + id,
      this.authService.getOptions()
    );
  }

  addTest(test) {
    return this.httpClient.put(
      this.baseUrl + 'addTest',
      { _id: test._id, task: test.task },
      this.authService.getOptions()
    );
  }

}
