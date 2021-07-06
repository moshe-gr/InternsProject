import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  user: User;
  interns: User[];
  searchResults: User[] = [];
  searchInput: string;
  usersToShow: User[];

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.user = this.currentUserService.user;
    this.interns = this.user.more_info.students;
    this.usersToShow = this.interns;
  }

  searchList(): void {
    if(this.searchInput) {
      this.searchResults = this.interns.filter(
        user => user.first_name.includes(this.searchInput) || user.last_name.includes(this.searchInput)
      );
    }
    else {
      this.searchResults.length = 0;
    }
  }

  search(first_name?:string, last_name?:string): void {
    if(first_name) {
      this.usersToShow = this.searchResults.filter(
        user => first_name == user.first_name && last_name == user.last_name
      );
    }
    else {
      this.usersToShow = this.searchResults.length ? [...this.searchResults] : this.interns;
    }
  }

}