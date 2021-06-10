import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/currentUser.service';

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
  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
  }

  updateProfile() {
    if (this.currentUserService.user.intern_info) {
      this.currentUserService.user.intern_info['professional'] = {
        medical_institution: this.medInst,
        residency: this.residency,
        year_in_residency: this.yInRes,
        department: this.department
      }
    }
    else {
      this.currentUserService.user.intern_info = {
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
