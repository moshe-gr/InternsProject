import { Component, OnInit } from '@angular/core';
import { CountryInfo } from 'src/app/models/country-info';
import { InfoService } from 'src/app/services/info.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-questionnaire1',
  templateUrl: './questionnaire1.component.html',
  styleUrls: ['./questionnaire1.component.css']
})
export class Questionnaire1Component implements OnInit {

  age: number;
  country: string;
  city: string;
  gradYear: number;
  acdInst: string;
  countriesList: string[] = [];
  citiesList: string[] = [];

  constructor(private registerService: RegisterService, private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getCountriesInfo().subscribe(
      data => this.countriesList = data.map(data => data.country)
    )
  }

  updateProfile() {
    if (this.registerService.user.intern_info) {
      this.registerService.user.intern_info.personal = {
        academic_institution: this.acdInst,
        age: this.age,
        country: this.country,
        city: this.city,
        graduation_year: this.gradYear
      }
    }
    else {
      this.registerService.user.intern_info = {
        personal: {
          academic_institution: this.acdInst,
          age: this.age,
          country: this.country,
          city: this.city,
          graduation_year: this.gradYear
        }
      }
    }
  }

  getCities(): void {
    this.infoService.getCountriesInfo().subscribe(data => {
      this.citiesList = data.find(
        data => data.country == this.country
      ).cities;
    })
  }

}