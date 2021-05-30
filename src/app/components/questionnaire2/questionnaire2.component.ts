import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
