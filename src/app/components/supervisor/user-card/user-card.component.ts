import { Component, Input, OnInit } from '@angular/core';
import { InternInfo } from 'src/app/models/intern-info.model';
import { User } from 'src/app/models/user.model';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  intern: InternInfo;
  more1: string = "More";
  more2: string = "Intern";
  isCollapsed1 = true;
  isCollapsed2 = true;
  
  constructor(private internService: InternService) { }

  ngOnInit(): void {
  }

  moreInfo(): void {
    if(this.isCollapsed1){
      this.more1 = "More";
    }
    else if(!this.isCollapsed1){
      this.more1 = "Hide";
    }
  }

  internInfo(): void {
    if(this.isCollapsed2){
      this.more2 = "Intern";
    }
    else if(!this.isCollapsed2){
      this.more2 = "Hide";
      if (!this.intern) {
        this.internService.getIntern(this.user.more_info).subscribe(
          intern => this.intern = intern,
          err => console.log(err)
        );
      }
    }
  }

}
