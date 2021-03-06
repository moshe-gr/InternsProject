import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/enums/role.enum';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  choice: string = "user";
  msg: string = "This is wear you can handel internship please choose role to continue.";

  constructor(private currentUserService: CurrentUserService) {
    this.currentUserService.user.role = this.choice;
  }

  ngOnInit(): void {
  }

  intern(): void {
    this.choice = "intern";
    this.currentUserService.user.role_number = Role.intern;
    this.currentUserService.user.role = this.choice;
    this.msg = "This is wear you'l cover your internship take your exams view your results and see how its going.";
  }
  
  supervisor(): void {
    this.choice = "supervisor";
    this.currentUserService.user.role_number = Role.supervisor;
    this.currentUserService.user.role = this.choice;
    this.msg = "This is wear you'l follow your interns give your exams view the results and see how its going.";
  }

}
