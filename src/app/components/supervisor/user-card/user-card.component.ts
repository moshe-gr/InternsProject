import { Component, Input, OnInit } from '@angular/core';
import { Intern } from 'src/app/models/intern';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: Intern;
  more: string = "More";
  isCollapsed = true; 
  
  constructor() { }

  ngOnInit(): void {
  }

  moreInfo(): void{
    if(this.isCollapsed){
      this.more = "More";
    }
    else if(!this.isCollapsed){
      this.more = "Hide";
    }
  }

}
