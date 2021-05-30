import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passport: number;
  constructor(private usersService: UsersService, private registerService: RegisterService, private router: Router, private modalService: NgbModal, config: NgbModalConfig) { 
    config.backdrop = 'static';
  }

  ngOnInit(): void {
  }

  login(content) {
    let user = this.usersService.getUser(this.passport);
    if (user) {
      this.registerService.user = user;
      this.router.navigate(["/register2"]);
    }
    else {
      this.open(content);
    }
  }

  open(content) {
    this.modalService.open(content);
  }

}
