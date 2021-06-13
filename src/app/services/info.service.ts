import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryInfo } from '../models/country-info';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  countriesInfo: CountryInfo[] = [];

  constructor(private httpClient: HttpClient) { }

  getCountriesApi(): Observable<any> {
    if (this.countriesInfo) {
      return of(this.countriesInfo);
    }
    return this.httpClient.get("https://countriesnow.space/api/v0.1/countries").pipe(tap(data => this.countriesInfo = data.data));
  }

}
