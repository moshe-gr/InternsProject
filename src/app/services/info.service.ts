import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  countriesInfo = [];

  medical_institutions: string[] = [
    "Shaare zedek",
    "Hadassa",
    "Ziv",
    "Sheba",
    "Soroka",
    "Laniado",
    "Rambam",
    "Barzilai",
    "Ichilov"
  ]

  constructor(private httpClient: HttpClient) { }

  getCountriesApi(): Observable<any> {
    if (this.countriesInfo.length) {
      return of(this.countriesInfo);
    }
    return this.httpClient.get("https://countriesnow.space/api/v0.1/countries").pipe(tap(data => this.countriesInfo = data));
  }

}
