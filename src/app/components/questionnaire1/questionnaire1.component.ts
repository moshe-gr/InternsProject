import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-questionnaire1',
  templateUrl: './questionnaire1.component.html',
  styleUrls: ['./questionnaire1.component.css']
})
export class Questionnaire1Component implements OnInit {

  formFildes: {
    age: number,
    country: string,
    city: string,
    gradYear: number,
    acdInst: string
  }
  constructor(registerService: RegisterService) { }

  ngOnInit(): void {
  }

}
