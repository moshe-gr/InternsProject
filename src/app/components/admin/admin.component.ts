import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  show: string = "SHOW";

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  getAllUsers(): void {
    if (this.show == "SHOW") {    
      this.userService.getUsers().subscribe(
        users => this.users = users,
        err => console.error(err)
      );
      this.show = "HIDE";
    }
    else {
      this.users.length = 0;
      this.show = "SHOW";
    }
  }

  deleteUser(_id: string): void {
    this.userService.deleteUser(_id).subscribe(
      () => this.users = this.users.filter(user => user._id != _id),
      err => console.error(err)
    );
  }

}
