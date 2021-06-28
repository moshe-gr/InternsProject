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
  ];
  residencyList: string[] = [
    "Allergy",
    "Immunology",
    "Anesthesiology",
    "Dermatology",
    "Diagnostic radiology",
    "Emergency medicine",
    "Family medicine",
    "Internal medicine",
    "Medical genetics",
    "Neurology",
    "Nuclear medicine",
    "Obstetrics",
    "Gynecology",
    "Ophthalmology",
    "Pathology",
    "Pediatrics",
    "Preventive medicine",
    "Psychiatry",
    "Radiation oncology",
    "Surgery",
    "Urology"
  ];
  departmentsList: string[] = [
    "Orthopedic",
    "Oncology",
    "Brain surgery",
    "Cancer diseases",
    "Cardiology",
    "Cardiothoracic Surgery",
    "Ophthalmology",
    "Gastroenterology",
    "Hematology",
    "Organ transplantation",
    "Pediatrics",
    "Plastic surgery",
    "Orthopedics",
    "Surgical Oncology",
    "Pediatric Urology",
    "Urology",
    "Gynecologic"
  ]

  constructor(private httpClient: HttpClient) { }

  getCountriesApi(): Observable<any> {
    if (this.countriesInfo.length) {
      return of(this.countriesInfo);
    }
    return this.httpClient.get("https://countriesnow.space/api/v0.1/countries").pipe(tap(data => this.countriesInfo = data.data));
  }

}
