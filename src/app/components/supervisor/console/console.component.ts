import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  user: User;
  users: User[] = [
    { id: 0, first_name: 'a', last_name: 'z', passport: 1, telephone: '1', role_number: 2 },
    { id: 0, first_name: 're', last_name: 'y', passport: 2, telephone: '2', role_number: 2 },
    { id: 0, first_name: 'ghr', last_name: 'ik7yk', passport: 3, telephone: '3', role_number: 2 },
    { id: 0, first_name: 'hrgh', last_name: 'yerh', passport: 4, telephone: '4', role_number: 2 },
    { id: 0, first_name: 'ergyr', last_name: 'yte', passport: 5, telephone: '5', role_number: 2 },
    { id: 0, first_name: 'kwds', last_name: 'wqe', passport: 6, telephone: '6', role_number: 2 },
    { id: 0, first_name: 'ijmew', last_name: 'kjf', passport: 7, telephone: '7', role_number: 2 },
    { id: 0, first_name: 'ery', last_name: 'mn', passport: 8, telephone: '8', role_number: 2 },
    { id: 0, first_name: 'gfc', last_name: 'uy', passport: 9, telephone: '9', role_number: 2 },
    { id: 0, first_name: 'erwg', last_name: 'liuy', passport: 10, telephone: '10', role_number: 2 },
    { id: 0, first_name: 'wter', last_name: 'isf', passport: 11, telephone: '11', role_number: 2 },
    { id: 0, first_name: 'esik', last_name: 'yte', passport: 12, telephone: '12', role_number: 2 },
    { id: 0, first_name: 'rywh', last_name: 'bfd', passport: 13, telephone: '13', role_number: 2 },
    { id: 0, first_name: 'mhyx', last_name: 'yryy', passport: 14, telephone: '14', role_number: 2 },
    { id: 0, first_name: 'wea', last_name: 'wrrr', passport: 15, telephone: '15', role_number: 2 }
  ];
  searchResults: User[] = [];
  searchInput: string;
  usersToShow: User[];

  constructor(private userService: UsersService, private currentUserService: CurrentUserService) {
    this.user = this.currentUserService.user;
   }

  ngOnInit(): void {
    this.usersToShow = this.users;
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  searchList(): void {
    if(this.searchInput) {
      this.searchResults = this.users.filter(
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
      this.usersToShow = this.searchResults.length ? [...this.searchResults] : this.users;
    }
  }

}