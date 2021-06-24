import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { Location } from '@angular/common';
import { InternService } from 'src/app/services/intern.service';
import { Router } from '@angular/router';

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
  updateButton: string;
  update: boolean;

  constructor(private router: Router, private internService: InternService, private currentUserService: CurrentUserService, private infoService: InfoService, private location: Location) { }

  ngOnInit(): void {
    this.update = this.location.isCurrentPathEqualTo("/updatePersonal");
    this.updateButton = this.update ?  "UPDATE" : "NEXT";
    this.infoService.getCountriesApi().subscribe(
      data => {
        this.countriesList = data.data ?
          data.data.map(data => data.country) : data.map(data => data.country);
          if (this.currentUserService.user.more_info && this.currentUserService.user.more_info.personal) {
            this.age = this.currentUserService.user.more_info.personal.age;
            this.country = this.currentUserService.user.more_info.personal.country;
            this.city = this.currentUserService.user.more_info.personal.city;
            this.gradYear = this.currentUserService.user.more_info.personal.graduation_year;
            this.acdInst = this.currentUserService.user.more_info.personal.academic_institution;
          }
          if (this.country) {
            this.getCities();
          }
      }
    );
  }

  updateProfile() {
    if (this.currentUserService.user.more_info) {
      this.currentUserService.user.more_info.personal = {
        academic_institution: this.acdInst,
        age: this.age,
        country: this.country,
        city: this.city,
        graduation_year: this.gradYear
      }
    }
    else {
      this.currentUserService.user.more_info = {
        personal: {
          academic_institution: this.acdInst,
          age: this.age,
          country: this.country,
          city: this.city,
          graduation_year: this.gradYear
        }
      }
    }
    if (this.update) {
      this.internService.updateIntern(
        this.currentUserService.user.more_info._id, { personal: this.currentUserService.user.more_info.personal }
      ).subscribe(
        data => console.log(data),
        err => console.log(err)
      );
      this.location.back();
    }
    else {
      this.router.navigate(["/questionnaire2"]);
    }
  }

  getCities(): void {
    this.infoService.getCountriesApi().subscribe(data => {
      this.citiesList = data.find(
        data =>
          data.data ?
            data.data.country == this.country : data.country == this.country
      ).cities;
    });
  }

}
  