import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { InfoService } from 'src/app/services/info.service';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-questionnaire2',
  templateUrl: './questionnaire2.component.html',
  styleUrls: ['./questionnaire2.component.css']
})
export class Questionnaire2Component implements OnInit {

  medInst: string;
  residency: string;
  department: string;
  yInRes: number;
  update: boolean;
  updateButton: string;

  constructor(private router: Router, private internService: InternService, private currentUserService: CurrentUserService, public infoService: InfoService, private location: Location) { }

  ngOnInit(): void {
    this.update = this.location.isCurrentPathEqualTo("/updateProfessional");
    this.updateButton = this.update ? "UPDATE" : "DONE!";
    if (this.currentUserService.user.more_info && this.currentUserService.user.more_info.professional) {
      this.medInst = this.currentUserService.user.more_info.professional.medical_institution;
      this.residency = this.currentUserService.user.more_info.professional.residency;
      this.department = this.currentUserService.user.more_info.professional.department;
      this.yInRes = this.currentUserService.user.more_info.professional.year_in_residency;
    }
  }

  updateProfile() {
    if (this.currentUserService.user.more_info) {
      this.currentUserService.user.more_info.professional = {
        medical_institution: this.medInst,
        residency: this.residency,
        year_in_residency: this.yInRes,
        department: this.department
      }
    }
    else {
      this.currentUserService.user.more_info = {
        professional: {
          medical_institution: this.medInst,
          residency: this.residency,
          year_in_residency: this.yInRes,
          department: this.department
        }
      }
    }
    if (!this.update) {
      this.router.navigate(["/ready"]);
    }
    else {
      this.internService.updateIntern(
        this.currentUserService.user.more_info._id, { user: this.currentUserService.user._id, professional: this.currentUserService.user.more_info.professional }
      ).subscribe(
        data => console.log(data),
        err => console.log(err)
      );
      this.location.back();
    }
  }
}
