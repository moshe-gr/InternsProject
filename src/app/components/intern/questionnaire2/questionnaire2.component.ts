import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { InfoService } from 'src/app/services/info.service';

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
  constructor(private currentUserService: CurrentUserService, public infoService: InfoService) {
    if (this.currentUserService.user.more_info && this.currentUserService.user.more_info.professional) {
      this.medInst = this.currentUserService.user.more_info.professional.medical_institution;
      this.residency = this.currentUserService.user.more_info.professional.residency;
      this.department = this.currentUserService.user.more_info.professional.department;
      this.yInRes = this.currentUserService.user.more_info.professional.year_in_residency;
    }
  }

  ngOnInit(): void {
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
  }
}
