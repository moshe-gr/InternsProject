import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

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
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  updateProfile(){
    this.registerService.user.professional = {
      medInst: this.medInst,
      residency: this.residency,
      department: this.department,
      yearInResidency: this.yInRes
    };
  }
}
