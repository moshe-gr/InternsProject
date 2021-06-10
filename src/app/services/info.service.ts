import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryInfo } from '../models/country-info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private countriesInfo: BehaviorSubject<CountryInfo[]> = new BehaviorSubject<CountryInfo[]>([]);

  constructor(private httpClient: HttpClient) {
    this.getCountriesApi().subscribe(
      data => this.countriesInfo.next(data.data)
    )
   }

  getCountriesApi(): Observable<any> {
    return this.httpClient.get("https://countriesnow.space/api/v0.1/countries");
  }

  getCountriesInfo(): Observable<CountryInfo[]> {
    return this.countriesInfo;
  }

}
