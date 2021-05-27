import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passport = '';
  constructor(private usersService: UsersService, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.usersService.getUsers().subscribe(users => {
      let user = users.find(user => user.passport == +this.passport)
      if (user) {
        this.registerService.user = user;
        this.router.navigate(["/register2"]);
      }
      else {
        alert("No user found");
      }
    });
  }

}
