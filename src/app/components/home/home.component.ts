import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  choice = "intern";
  constructor() { }

  ngOnInit(): void {
  }

  intern(): void {
    this.choice = "intern";
  }
  
  supervisor(): void {
    this.choice = "supervisor";
  }

}
