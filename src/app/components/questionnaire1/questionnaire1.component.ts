import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';

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

  constructor(private currentUserService: CurrentUserService, private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getCountriesInfo().subscribe(
      data => this.countriesList = data.map(data => data.country)
    )
  }

  updateProfile() {
    if (this.currentUserService.user.intern_info) {
      this.currentUserService.user.intern_info.personal = {
        academic_institution: this.acdInst,
        age: this.age,
        country: this.country,
        city: this.city,
        graduation_year: this.gradYear
      }
    }
    else {
      this.currentUserService.user.intern_info = {
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