import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerModel } from '../models/answer.model';
import { TestModel } from '../models/test.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl: string = 'http://localhost:8080/api/tests/';

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  getInternTests(id: string): Observable<TestModel[]> {
    return this.httpClient.get<TestModel[]>(
      this.baseUrl + 'getAllInternTests/' + id,
      this.authService.getOptions()
    );
  }

  getSupervisorTests(id: string): Observable<TestModel> {
    return this.httpClient.get<TestModel>(
      this.baseUrl + 'getAllSupervisorTests/' + id,
      this.authService.getOptions()
    );
  }

  addTest(test): Observable<TestModel> {
    return this.httpClient.put(
      this.baseUrl + 'addTest',
      { _id: test._id, task: test.task },
      this.authService.getOptions()
    );
  }

  getInternDone(id: string): Observable<AnswerModel> {
    return this.httpClient.get<AnswerModel>(
      this.baseUrl + 'getAllInternDone/' + id,
      this.authService.getOptions()
    );
  }

  getSupervisorDone(id: string): Observable<AnswerModel[]> {
    return this.httpClient.get<AnswerModel[]>(
      this.baseUrl + 'getAllSupervisorDone/' + id,
      this.authService.getOptions()
    );
  }

  addDone(test): Observable<AnswerModel> {
    return this.httpClient.put(
      this.baseUrl + 'addDone',
      { _id: test._id, file_url: test.file_url, test: test.test },
      this.authService.getOptions()
    );
  }

  deleteTest(_id: string, file_url: string): Observable<TestModel> {
    return this.httpClient.put(
      this.baseUrl + 'delete',
      { _id: _id, file_url: file_url },
      this.authService.getOptions()
    );
  }

}
