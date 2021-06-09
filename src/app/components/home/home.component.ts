import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  choice = "intern";
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  intern(): void {
    this.choice = "intern";
  }
  
  supervisor(): void {
    this.choice = "supervisor";
  }

}
